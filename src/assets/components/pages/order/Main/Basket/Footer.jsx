import React from 'react'
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';
import { theme } from '../../../../../theme';


export default function Footer() {
  return (
    <Header>
      <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
      </FooterStyled>
    </Header>
  );
}

const FooterStyled = styled.div`
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
