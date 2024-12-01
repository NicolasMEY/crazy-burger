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
          key={tab.index}
          index={tab.index}
        label={tab.label} 
        Icon={tab.Icon} 
        onClick={() => selectTab(tab.index)}
        className={currentTabSelected=== tab.index ? "is-active" : ""}
        />
        ))}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
display: flex;
position: absolute;
  top: -43px;
  left: 3%;
/* padding: 0 20px; */

.is-active {
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  border-color: ${theme.colors.background_dark};
  /* border-bottom: 2px; */
}

button{
  margin-left: 1px;
}
  
`
