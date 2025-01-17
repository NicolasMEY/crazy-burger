import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import {EMPTY_PRODUCT, IMAGE_COMING_SOON, IMAGE_NO_STOCK} from "../../../../../constants/product"
import { isEmpty } from "../../../../../../utils/array";
import Loader from "./Loader.jsx";
import {TransitionGroup, CSSTransition} from "react-transition-group"
import { menuAnimation } from "../../../../../theme/animation";
import { convertStringToBoolean } from "../../../../../../utils/string";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated.jsx";

export default function Menu() {
const {username, menu, isModeAdmin, handleDelete, resetMenu, productSelected, setproductSelected, handleAddToBasket, handleDeleteBasketProduct, handleProductSelected
} = useContext(OrderContext)


// Comportement (gestionnaires d'événement ou "event handlers")

const handleCardDelete = (event, idProductToDelete) => {
  event.stopPropagation()
  handleDelete(idProductToDelete, username)
  handleDeleteBasketProduct(idProductToDelete, username)
  idProductToDelete === productSelected.id && setproductSelected(EMPTY_PRODUCT)
}

const handleAddButton = (event, idProductToAdd) => {
  event.stopPropagation()
  handleAddToBasket(idProductToAdd, username)
}

let cardContainerClassName = isModeAdmin ? "card-container is-hoverable" : "card-container"

// Affichage

if(menu === undefined) return <Loader/>


if (isEmpty (menu)) {
  if(!isModeAdmin) return <EmptyMenuClient/>
  return (
    <EmptyMenuAdmin onReset={() => resetMenu(username)}/>)
  }

  return (
    <TransitionGroup component={MenuStyled} className="menu" >
      {menu.map(({id, title, imageSource, price, isAvailable, isPublicised} ) => {
        return (
          
          <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
             <div className={cardContainerClassName} key={id}> 
          {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
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
            overlapImageSource={IMAGE_NO_STOCK} isOverlapImageVisible={convertStringToBoolean (isAvailable) === false}
            />
        </div>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
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
  
  ${menuAnimation}

  .card-container {
    position: relative;
    border-radius: ${theme.borderRadius.extraRound};
    height: 300px;
    
    &.is-hoverable:hover {
  transform: scale(1.05);
  transition: ease-out 0.4s;
}
  }

  .ribbon {
      z-index: 2;
    }

    ${ribbonAnimation}
`