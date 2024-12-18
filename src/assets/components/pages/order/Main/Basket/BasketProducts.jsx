import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMING_SOON } from '../../../../../enums/product';
import { findObjectById } from '../../../../../../utils/array';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { checkIfProductIsClicked } from '../Menu/helper';
import{TransitionGroup, CSSTransition} from "react-transition-group"

export default function BasketProducts() {
const {username, basket, isModeAdmin, handleDeleteBasketProduct, menu, handleProductSelected, productSelected} = useContext(OrderContext)

const handleOnDelete = (event, id) => {
event.stopPropagation()
handleDeleteBasketProduct(id, username)
}


  return (
    <BasketProductStyled>
    
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu )
          return(
      <CSSTransition 
      appear={true}
      classNames={"animation-basket"}
      key={basketProduct.id}
      timeout={{enter: 500, exit: 500}}
     >
        <div className='card-container' >
            <BasketCard
            {...menuProduct}
            imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON }
            quantity={basketProduct.quantity}
            onDelete={(event) => handleOnDelete(event, basketProduct.id)}
            isClickable={isModeAdmin}
            isSelected= {checkIfProductIsClicked(basketProduct.id, productSelected.id)}
            onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null }
            handleDeleteBasketProduct={handleDeleteBasketProduct}
            className={"card"}/>
        </div>
      </CSSTransition>
      )})}</TransitionGroup>
    </BasketProductStyled>
        )
}

const BasketProductStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .animation-basket-appear
.card {
  transform:translateX(100px);
  opacity: 0%;
}

.animation-basket-appear-active
.card {
  transition: 0.5s;
  transform: translateX(0px);
  opacity: 100%;
}


.animation-basket-enter
.card {
  transform:translateX(100px);
  opacity: 0%;
}

.animation-basket-enter-active
.card {
  transition: 0.5s;
  transform: translateX(0px);
  opacity: 100%;
}

.animation-basket-enter-done
.card {
  transition: 2s;
}

.animation-basket-exit
.card {
  transform: translateX(0px);
  opacity: 100%;
}

.animation-basket-exit-active
.card {
  transition: 0.5s;
  transform:translateX(-100px);
  opacity: 0%;
}

  .card-container {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    /* :first-child{
        margin-top: 20px;
    }
    :last-child {
        margin-bottom: 20px;
    } */
  }
`;
