import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Tab from '../../../../reusable-ui/Tab';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { getTabsConfig } from './getTabsConfig.jsx';

export default function AdminTabs() {
  const {isCollapsed, setIsCollapsed,   currentTabSelected, setcurrentTabSelected } = useContext(OrderContext)
  
  
  const selectTab = (tabSelected) => {
    setIsCollapsed(false) // ouvre moi le panel dans tous les cas
    setcurrentTabSelected(tabSelected) // réactualise l'onglet sélectionné
    }

    const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab
        Icon= {isCollapsed ?<FiChevronUp/> : <FiChevronDown/>}
        onClick={() => setIsCollapsed(!isCollapsed)}
          className= {isCollapsed ? "is-active" : ""}
      />
        {tabs.map((tab) => (
          <Tab 
        label={tab.label} 
        Icon={tab.Icon} 
        onClick={() => selectTab(tab.index)}
        className={tab.className}
        />
        ))}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
display: flex;
/* padding: 0 20px; */

.is-active {
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  border-color: ${theme.colors.background_dark};
  border-bottom: 2px;
}

button{
  margin-left: 1px;
}
  
`
