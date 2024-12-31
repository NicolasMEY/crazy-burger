import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/theme';

// 1ère méthode : classique
// type headerProps = {
//   children : React.ReactNode
// }

// 2ème méthode : PropsWithChildren quand il n'y a que children dans les props

export default function Header({children} : PropsWithChildren) {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  )
}

const HeaderStyled = styled.div`
   height: 70px;
    background-color: ${theme.colors.background_dark};
    padding: 0 16px;
`;