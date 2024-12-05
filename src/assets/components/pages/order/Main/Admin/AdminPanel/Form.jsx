import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import TextInput from "../../../../../reusable-ui/TextInput"
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextConfig";

export default function Form({product, onSubmit, onChange, isSubmitted}) {
const {handleAdd, newProduct, setNewProduct} = useContext(OrderContext)

const inputTexts = getInputTextsConfig(product)


  return (
  <FormStyled onSubmit={onSubmit}>
<ImagePreview imageSource={product.imageSource} title={newProduct.title}/>
    < div className= "input-fields">
    {inputTexts.map((input) => (<TextInput key={(input.id)} {...input} onChange={onChange} version="minimalist"
    />))}
    </div>
    <div className="submit">
      <Button 
      className="submit-button" 
      label={"Ajouter un nouveau produit au menu"} version="success"
      />
    {isSubmitted && (
    <SubmitMessage/>
    )}
    </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
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
