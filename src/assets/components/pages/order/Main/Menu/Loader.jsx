import React from 'react'
import { theme } from '../../../../../theme';
import styled from 'styled-components';

export default function Loader() {
  return (
    <LoaderStyled><span className='title'>Chargement ...</span></LoaderStyled>
  )
}

const LoaderStyled = styled.div`
  background-color: ${theme.colors.background_white};
  font-family: "Amatic SC", cursive;
  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.P4};
  font-weight: ${theme.weights.semiBold};
`;
