import styled from "styled-components"
import { theme } from "../../../../../theme"
import Header from "../../../../reusable-ui/Header"
import Total from "./Total"
import {formatPrice} from"../../../../../../utils/maths"
import Footer from "./Footer"

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="body">body</div>
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  
.body {
flex: 1;
background-color: ${theme.colors.background_white};
box-shadow: ${theme.shadows.basket};
}
`