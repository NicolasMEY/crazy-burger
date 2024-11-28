import React, { useContext } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import { getTabSelected, getTabsConfig } from './getTabsConfig.jsx';

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)
  
const tabs = getTabsConfig(currentTabSelected)
const tabSelected =  getTabSelected  (tabs, currentTabSelected)

  return (
    <AdminPanelStyled className='panel-admin'>
      {currentTabSelected === tabSelected.index && tabSelected.label}
      </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
    height: 251px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background-color: ${theme.colors.white};
    border-top: 1px, solid, ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};

`;
