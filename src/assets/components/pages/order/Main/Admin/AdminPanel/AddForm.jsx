import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import TextInput from "../../../../../reusable-ui/TextInput"
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextConfig";

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "", 
  price: 0,
}

export default function AddForm() {
const {handleAdd, newProduct, setNewProduct} = useContext(OrderContext)
const [isSubmitted,setIsSubmitted] = useState(false)

// comportements
const handleSubmit = (event) => {
  event.preventDefault()
  const newProductToAdd = {
    ...newProduct,
    id: crypto.randomUUID()
  }
  handleAdd(newProductToAdd)
  setNewProduct(EMPTY_PRODUCT)
  displaySuccesMessage()
}

const handleChange = (event) => {
  const {name, value} = event.target
  setNewProduct({...newProduct, [name]: value }) 
}

const displaySuccesMessage = () => {setIsSubmitted(true)
  setTimeout(() => {
    setIsSubmitted(false)
  }, 2000);}

const inputTexts = getInputTextsConfig(newProduct)

  return (
  <AddFormStyled onSubmit={handleSubmit}>
<ImagePreview imageSource={newProduct.imageSource} title={newProduct.title}/>
    < div className= "input-fields">
    {inputTexts.map((input) => (<TextInput key={(input.id)} {...input} onChange={handleChange} version="minimalist"
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
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
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
