import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage.jsx"

export default function EditForm() {
  // State
  const {productSelected, setproductSelected, handleEdit, titleEditRef} = useContext(OrderContext)

  
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
     
<Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
<EditInfoMessage />
    </Form>
  )
}



