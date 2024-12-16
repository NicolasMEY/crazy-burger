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
import { isEmpty } from "../../../../../../utils/array.jsx";
import Loader from "./Loader.jsx";

export default function Menu() {
const {username, menu, isModeAdmin, handleDelete, resetMenu, productSelected, setproductSelected, handleAddToBasket, handleDeleteBasketProduct, handleProductSelected
} = useContext(OrderContext)


// Comportement (gestionnaires d'événement ou "event handlers")

const handleCardDelete = (event, idProductToDelete) => {
  event.stopPropagation()
  handleDelete(idProductToDelete, username)
  handleDeleteBasketProduct(idProductToDelete)
  idProductToDelete === productSelected.id && setproductSelected(EMPTY_PRODUCT)
}

const handleAddButton = (event, idProductToAdd) => {
  event.stopPropagation()
  handleAddToBasket(idProductToAdd, username)
}

// Affichage
if(menu === undefined) return <Loader/>


if (isEmpty (menu)) {
  if(!isModeAdmin) return <EmptyMenuClient/>
  return (
    <EmptyMenuAdmin onReset={() => resetMenu(username)}/>)
  }

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
        onClick={isModeAdmin ? () => handleProductSelected(id) : null }
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