import { useContext, useRef } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  // State
  const {productSelected, setproductSelected, handleEdit, titleEditRef} = useContext(OrderContext)
  const inputTexts = getInputTextsConfig(productSelected)
  
  // Comportements
  const handleChange = (event) => { 
    const{name, value} = event.target

   const productBeingUpdated =  {
    ...productSelected,
    [name] : value,
  }

  setproductSelected(productBeingUpdated) // Cette ligne update le formulaire
  handleEdit(productBeingUpdated) // cette ligne update le menu

  }
  return (
    <EditFormStyled >
<ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
    < div className= "input-fields">
    {inputTexts.map((input) => (<TextInput key={(input.id)} {...input} onChange={handleChange} version="minimalist" ref={input.name === "title" ? titleEditRef : null}
    />))}
    </div>
    <div className="submit">
    <EditInfoMessage/>
      </div>
    </EditFormStyled>
  )
}


const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  gap: 8px 20px;

  .input-fields {
    grid-area: 1 / 2 / 4 / 3 ;
    display: grid;
    grid-row-gap: 8px;
    /* grid-template-columns: 1fr;
    grid-template-rows:repeat(3, 1fr) ; */
  }
  .submit {
    grid-area: 4 / 2 / 5 / 3 ;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    
  }
`;
