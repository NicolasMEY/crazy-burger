import React from 'react'
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { theme } from '../../../../../theme';


export default function BasketFooter() {
  return (
    <Header>
      <BasketFooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
      </BasketFooterStyled>
    </Header>
  );
}

const BasketFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: ${theme.fonts.P2};
    font-family: ${theme.family.stylish};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }


`;
