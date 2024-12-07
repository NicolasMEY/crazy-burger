import styled from "styled-components"
import { theme } from "../../../../theme"

export default function Basket() {
  return <BasketStyled>
<div className="head">head</div>
<div className="body">body</div>
<div className="footer">footer</div>


  </BasketStyled>
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  

.head {
 height: 70px;
 background-color: ${theme.colors.background_dark};
}
.body {
flex: 1;
background-color: ${theme.colors.background_white};
box-shadow: ${theme.shadows.basket};
}
.footer {
  height: 70px;
 background-color: ${theme.colors.background_dark};
}






`