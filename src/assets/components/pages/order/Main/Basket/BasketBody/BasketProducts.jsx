import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';
import { BASKET_MESSAGE, IMAGE_COMING_SOON } from '../../../../../../constants/product';
import { findObjectById } from '../../../../../../../utils/array';
import { useContext } from 'react';
import OrderContext from '../../../../../../context/OrderContext';
import { checkIfProductIsClicked } from '../../Menu/helper';
import{TransitionGroup, CSSTransition} from "react-transition-group"
import { basketAnimation } from '../../../../../../theme/animation';
import { formatPrice } from '../../../../../../../utils/maths';
import { convertStringToBoolean } from '../../../../../../../utils/string';
import Sticker from '../../../../../reusable-ui/Sticker';

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
      timeout={{enter: 300, exit: 300}}
     >
        <div className='card-container' >
{convertStringToBoolean(menuProduct.isPublicised) && <Sticker className="badge-new"/> }

            <BasketCard
            {...menuProduct}
            imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON }
            quantity={basketProduct.quantity}
            onDelete={(event) => handleOnDelete(event, basketProduct.id)}
            isClickable={isModeAdmin}
            isSelected= {checkIfProductIsClicked(basketProduct.id, productSelected.id)}
            onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null }
            handleDeleteBasketProduct={handleDeleteBasketProduct}
            className={"card"}
            price={convertStringToBoolean(menuProduct.isAvailable) ? formatPrice(menuProduct.price) : BASKET_MESSAGE.NOT_AVAILABLE}/>
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

  
  .card-container {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    position: relative;
    /* :first-child{
        margin-top: 20px;
    }
    :last-child {
        margin-bottom: 20px;
    } */

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }



  }
  ${basketAnimation}
`;
