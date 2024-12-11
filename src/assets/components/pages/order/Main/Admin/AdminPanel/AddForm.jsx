import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccesMessage } from "../../../../../../hooks/useSuccesMessage.jsx";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths.js";


export default function AddForm() {
const {handleAdd, newProduct, setNewProduct} = useContext(OrderContext)
const {isSubmitted, displaySuccesMessage} = useSuccesMessage()


// comportements
const handleSubmit = (event) => {
  event.preventDefault()
  const newProductToAdd = {
    ...newProduct,
    id: crypto.randomUUID(),
    price: replaceFrenchCommaWithDot(newProduct.price)
  }
  handleAdd(newProductToAdd)
  setNewProduct(EMPTY_PRODUCT)
  displaySuccesMessage()
}

const handleChange = (event) => {
  const {name, value} = event.target
  setNewProduct({...newProduct, [name]: value }) 
}

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
    <SubmitButton isSubmitted={isSubmitted}/>
  </Form>
  )
}


