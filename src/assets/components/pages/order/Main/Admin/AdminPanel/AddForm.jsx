import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "", 
  price: 0,
}

export default function AddForm() {
  const {handleAdd} = useContext(OrderContext)

const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

const handleSubmit = (event) => {
  event.preventDefault()
  const newProductToAdd = {
    ...newProduct,
    id: crypto.randomUUID
  }
  handleAdd(newProductToAdd)
}

const handleChange = (event) => {
  const {name, value} = event.target
  setNewProduct({...newProduct, [name]: value }) 
}

  return (
  <AddFormStyled onSubmit={handleSubmit}>
    <div className="image-preview">Aucune image</div>
    < div className= "input-fields">
      <input name = "title"  value={newProduct.title} type="text" placeholder="Nom" onChange={handleChange} />
      <input name = "imageSource"  value={newProduct.imageSource} type="text" placeholder="Image URL" onChange={handleChange} />
      <input name = "price"  value={newProduct.price ? newProduct.price : ""} type="text" placeholder="Prix" onChange={handleChange} />
    </div> 
    <button className="submit-button">Submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 5px, solid, black;
  display: grid;
  grid-template-columns: 1fr, 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background-color: blue;
    // Grid-area : coin  supérieur gauche puis coin inférieur droit et on commence toujours par la ligne
    grid-area: 1 / 1 / 4 / 2 ;
  }
  .input-fields {
    background-color: purple;
    grid-area: 1 / 2 / 4 / 3 ;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:repeat(3, 1fr) ;
  }
  .submit-button {
    background-color: green;
    grid-area: 4 / 2 / 5 / 3 ;
    width: 50%;
  }

`;
