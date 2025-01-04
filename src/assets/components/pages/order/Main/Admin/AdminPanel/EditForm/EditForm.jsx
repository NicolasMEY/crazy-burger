import { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext.jsx";
import Form from "../Form/Form.jsx";
import EditInfoMessage from "./EditInfoMessage.jsx"
import SavingMessage from "./SavingMessage.jsx"
import { useSuccesMessage } from "../../../../../../../hooks/useSuccesMessage";

export default function EditForm() {
  // State
  const {username, productSelected, setproductSelected, handleEdit, titleEditRef} = useContext(OrderContext)

  const [valueOnFocus, setvalueOnFocus] = useState()
  const {isSubmitted : isSaved, displaySuccesMessage} = useSuccesMessage()

  // Comportements
  const handleChange = (event) => { 
    const{name, value} = event.target

   const productBeingUpdated =  {
    ...productSelected,
    [name] : value,
  }

  setproductSelected(productBeingUpdated) // Cette ligne update le formulaire
  handleEdit(productBeingUpdated, username) // cette ligne update le menu
  }

const handleOnFocus = (event) => {
  const valueOnFocus = event.target.value
  setvalueOnFocus(valueOnFocus)
}

const handleOnBlur = (event) => {
  const valueOnBlur = event.target.value
  if(valueOnFocus !== valueOnBlur) {
    displaySuccesMessage()
  }
}

  
  return (
<Form 
product={productSelected} 
onChange={handleChange} 
onFocus={handleOnFocus} 
onBlur={handleOnBlur}
ref={titleEditRef}>

{isSaved ? <SavingMessage/> : <EditInfoMessage />}
    </Form>
  )
}



