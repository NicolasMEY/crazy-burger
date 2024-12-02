import { useContext, useState } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import styled from "styled-components";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function EditForm() {
  const {productSelected} = useContext(OrderContext)
  const [productBeingEdited, setproductBeingEdited] = useState(EMPTY_PRODUCT)

  const inputTexts = getInputTextsConfig(productSelected)
  
  const handleChange = (event) => { const{name, value} = event.target
  setproductBeingEdited ({
    ...productBeingEdited,
    [name] : value,
  })
  }

  return (
    <EditFormStyled >
<ImagePreview imageSource={productSelected.imageSource} title={productSelected.title}/>
    < div className= "input-fields">
    {inputTexts.map((input) => (<TextInput key={(input.id)} {...input} onChange={handleChange} version="minimalist"
    />))}
    </div>
    <div className="submit">
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

    .submit-button {
      /* width: 50%;  */
      height: 100%;
      
    }
  }
`;
