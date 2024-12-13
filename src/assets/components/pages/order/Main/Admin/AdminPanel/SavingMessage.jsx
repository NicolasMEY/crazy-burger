import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme';
import { BsCloudCheck } from 'react-icons/bs';

export default function Savingmessage() {
  return (
    <SavingMessageStyled><div className='icon'><BsCloudCheck/></div><span className='sentence'>Modification en registrées !</span></SavingMessageStyled>
  )
}

const SavingMessageStyled = styled.div`
  display: flex;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.SM};

.icon {
    font-size: ${theme.fonts.P2};
    display: flex;
    margin: 0 10px;
}

`;
