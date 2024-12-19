import styled from "styled-components"
import Total from "./Total"
import Footer from "./Footer"
import { theme } from "../../../../../theme/index.js"
import BasketBody from "./BasketBody/BasketBody.jsx"

export default function Basket() {
  
  return (
    <BasketStyled>
      <Total/>
      <BasketBody/>
      {/* {isEmpty(basket) ? <EmptyBasket isLoading={menu === undefined}/> : <BasketProducts  />}  */}
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


