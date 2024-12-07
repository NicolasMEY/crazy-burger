import styled from "styled-components";
import { theme } from "../../../../../../theme";
import {HiCursorClick} from "react-icons/hi"

export default function HintMessage() {
  return (
    <HintMessageStyled>
        <span className="hint">Cliquez sur un produit pour le modifier</span>
        <HiCursorClick/>
        </HintMessageStyled>
  )
}

const HintMessageStyled = styled.span`
  display: flex;
  align-items: center;
  font-family: ${theme.family.stylish};
  font-size: ${theme.fonts.P3};
  color: ${theme.colors.greyBlue};

  position: relative;
  top: 50px;

  span {
    margin-right: 10px;
  }
`;