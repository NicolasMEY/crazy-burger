import styled from "styled-components"
import { theme } from "../../../../../theme"
import Total from "./Total"
import {formatPrice} from"../../../../../../utils/maths"
import Footer from "./Footer"
import EmptyBasket from "./EmptyBasket.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import BasketProducts from "./BasketProducts.jsx"

export default function Basket() {
  const {basket} =  useContext
  (OrderContext)

  const isBasketEmpty = basket.length === 0

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      {/* <EmptyBasket basket={basket}/> */}
      {isBasketEmpty ? <EmptyBasket/> : <BasketProducts />} 
      {/* {isBasketEmpty ? <EmptyBasket/> : <BasketProducts basket={basket}/>} */ }
      {/* <BasketProducts/> */}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  

`