import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import {EMPTY_PRODUCT, IMAGE_COMING_SOON} from "../../../../../enums/product.jsx"

export default function Menu() {
const {menu, isModeAdmin, handleDelete, resetMenu, productSelected, setproductSelected, setIsCollapsed,
  setCurrentTabSelected,titleEditRef, handleAddToBasket
} = useContext(OrderContext)


// Comportement (gestionnaires d'événement ou "event handlers")

const handleClick = async (idProductClicked) => {
  if(!isModeAdmin) return

  setIsCollapsed(false)
  setCurrentTabSelected("edit")
  // const productClickedOn = menu.find((product) => product.id === idProductClicked)
  const productClickedOn = find(idProductClicked, menu)
   setproductSelected(productClickedOn)
   setTimeout(() => titleEditRef.current.focus(), 0)
}

// Affichage
if (menu.length === 0) {
  if(!isModeAdmin) return <EmptyMenuClient/>
  return (
    <EmptyMenuAdmin onReset={resetMenu}/>)
  }
  
  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    handleDelete(idProductToDelete)
    idProductToDelete === productSelected.id && setproductSelected(EMPTY_PRODUCT)
    titleEditRef.current.focus()
  }
  
  const handleAddButton = (event, idProductToAdd) => {event.stopPropagation()
    // const productToAdd = menu.find((menuProduct)=> menuProduct.id === idProductToAdd )
    const productToAdd = find(idProductToAdd, menu)
    handleAddToBasket(productToAdd)}

  return (
    <MenuStyled className="menu" >
      {menu.map(({id, title, imageSource, price} ) => {
        return (
        <Card 
        key={id} 
        title={title} 
        imageSource={imageSource ? imageSource : IMAGE_COMING_SOON } leftDescription={formatPrice(price)}
        hasDeleteButton={isModeAdmin}
        onDelete={(event) => handleCardDelete(event, id)}
        onClick={() => handleClick(id)}
        isHoverable={isModeAdmin}
        isSelected= {checkIfProductIsClicked(id, productSelected.id)}
        onAdd={(event) => handleAddButton(event, id)}
        />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
background-color: ${theme.colors.white};
box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
display: grid;
grid-template-columns: repeat(3, 1fr) ; 
/* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) ; */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;