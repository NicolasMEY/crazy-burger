import React from 'react'
import styled from 'styled-components';
import BasketCard from './BasketCard';
import { IMAGE_COMING_SOON } from '../../../../../enums/product';

export default function BasketProducts({basket, isModeAdmin, handleDeleteBasketProduct}) {

const handleOnDelete = (id) => {handleDeleteBasketProduct(id)}

  return (
    <BasketProductStyled>
      {basket.map((basketProduct) => (
    <div className='basket-card' key={basketProduct.id}>
        <BasketCard  
        {...basketProduct} 
        imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_COMING_SOON }
        onDelete={() => handleOnDelete(basketProduct.id)}
        isModeAdmin={isModeAdmin}
        handleDeleteBasketProduct={handleDeleteBasketProduct}/>
    </div> 
    ))}</BasketProductStyled>
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
