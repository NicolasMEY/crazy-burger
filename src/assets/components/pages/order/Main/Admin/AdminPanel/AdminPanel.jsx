import React, { useContext } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../../theme/index.js';
import OrderContext from '../../../../../../context/OrderContext.jsx';
import { getTabSelected, getTabsConfig } from '../getTabsConfig.jsx';
import { EMPTY_PRODUCT } from '../../../../../../constants/product';

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext)
  
  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
  const tabs = getTabsConfig(hasAlreadyBeenClicked)
  const tabSelected =  getTabSelected  (tabs, currentTabSelected)

  return (
    <AdminPanelStyled >
      {tabSelected && tabSelected.Content}
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
    height: 180px;
    /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background-color: ${theme.colors.white};
    border-top: 1px, solid, ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    padding: 30px 5%;// ajouter au panel et non dans les form car sinon on va devoir le mettre dans les deux form : AddForm et EditForm
  // les 5% c'est pour les aligner avec le tab.

`;


