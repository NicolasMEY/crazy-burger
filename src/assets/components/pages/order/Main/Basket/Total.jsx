import {useContext} from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../../utils/maths";
import { calculateSumToPay } from "./helper.js";
import CasinoEffect from "../../../../reusable-ui/casinoEffect.jsx";

export default function Total() {
  const {basket, menu} = useContext(OrderContext)

  const sumToPay = calculateSumToPay(basket, menu)
  
  return (
    <Header>
    <TotalStyled>
    <span className="total">Total</span>
    <CasinoEffect count={formatPrice (sumToPay)}/>
    </TotalStyled>
    </Header>
  )
}

const TotalStyled = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: ${theme.colors.primary};
font-family: "Amatic SC", cursive;
font-size: ${theme.fonts.P4};
font-weight: ${theme.weights.bold};
letter-spacing: 2px;
`;
