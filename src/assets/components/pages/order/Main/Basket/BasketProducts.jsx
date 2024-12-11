import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMING_SOON } from '../../../../../enums/product';
import { findObjectById } from '../../../../../../utils/array';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { checkIfProductIsClicked } from '../Menu/helper';

export default function BasketProducts() {
const {basket, isModeAdmin, handleDeleteBasketProduct, menu, handleProductSelected, productSelected} = useContext(OrderContext)

const handleOnDelete = (event, id) => {
event.stopPropagation()
{handleDeleteBasketProduct(id)}}


  return (
    <BasketProductStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu )
        return(
    <div className='basket-card' key={basketProduct.id}>
        <BasketCard  
        {...menuProduct} 
        imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_COMING_SOON }
        quantity={basketProduct.quantity}
        onDelete={(event) => handleOnDelete(event, basketProduct.id)}
        isClickable={isModeAdmin}
        isSelected= {checkIfProductIsClicked(basketProduct.id, productSelected.id)}


        onClick={isModeAdmin ? () => handleProductSelected(basketProduct.id) : null }
        handleDeleteBasketProduct={handleDeleteBasketProduct}/>
    </div> 
    )})}</BasketProductStyled>
  )
}

const BasketProductStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
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