import styled from "styled-components"
import Total from "./Total"
import {formatPrice} from"../../../../../../utils/maths"
import Footer from "./Footer"
import EmptyBasket from "./EmptyBasket.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import BasketProducts from "./BasketProducts.jsx"
import { theme } from "../../../../../theme/index.js"

export default function Basket() {
  const {basket, isModeAdmin, handleDeleteBasketProduct} =  useContext
  (OrderContext)

  const isBasketEmpty = basket.length === 0

  const sumToPay = basket.reduce((total, basketProduct) => {
    // if(isNaN(basketProduct.price)) return total
    total += basketProduct.price * basketProduct.quantity
    return total
  }, 0)

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(sumToPay)} />
      {isBasketEmpty ? <EmptyBasket/> : <BasketProducts basket={basket} isModeAdmin={isModeAdmin}
      handleDeleteBasketProduct={handleDeleteBasketProduct} />} 
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};;
    position: sticky;
    bottom: 0;
  }
  
  

`