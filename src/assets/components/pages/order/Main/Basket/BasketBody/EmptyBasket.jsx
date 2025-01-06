import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../../constants/product";

export default function EmptyBasket({isLoading}) {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">{isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY }</span></EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.div`
  flex: 1;
background-color: ${theme.colors.background_white};
box-shadow: ${theme.shadows.basket};

.empty-message {
  display: flex;
  height: calc(95vh - 10vh - 70px - 70px);
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  line-height: 2;
  font-family: ${theme.family.stylish};
  font-size: ${theme.fonts.P4};
  color: ${theme.colors.greyBlue};
}
`
