import OrderContext from "../../../../../../../context/OrderContext.jsx";
import { useContext } from "react";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.jsx";
import Form from "../Form/Form.jsx";
import SubmitButton from "./SubmitButton.jsx";
import { useSuccesMessage } from "../../../../../../../hooks/useSuccesMessage.jsx.jsx";
import { replaceFrenchCommaWithDot } from "../../../../../../../../utils/maths.js";


export default function AddForm() {
const {username, handleAdd, newProduct, setNewProduct} = useContext(OrderContext)
const {isSubmitted, displaySuccesMessage} = useSuccesMessage()


// comportements
const handleSubmit = (event) => {
  event.preventDefault()
  const newProductToAdd = {
    ...newProduct,
    id: crypto.randomUUID(),
    price: replaceFrenchCommaWithDot(newProduct.price)
  }
  handleAdd(newProductToAdd, username)
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


