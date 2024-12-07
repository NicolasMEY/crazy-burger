import styled from "styled-components"
import { theme } from "../../../../../theme"
import Header from "../../../../reusable-ui/Header"

export default function Basket() {
  return <BasketStyled>
<Header/>
<div className="body">body</div>
<Header/>
</BasketStyled>
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