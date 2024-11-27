import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Tab from '../../../../reusable-ui/Tab';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {
  const {isCollapsed, setIsCollapsed, isAddSelected, setIsAddSelected, isEditSelected,setIsEditSelected } = useContext(OrderContext)
  
  
  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectAddTab = () => {
    setIsCollapsed(false)
    setIsAddSelected(true)
    setIsEditSelected(false)
      }

  const selectEditTab = () => {
    setIsCollapsed(false)
    setIsEditSelected(true)
    setIsAddSelected(false)
  }

  return (
    <AdminTabsStyled>
        <Tab label="" Icon={isCollapsed ?<FiChevronUp/> : <FiChevronDown/>} onClick={handleClick}
        className={isCollapsed ? "is-active" : ""}
        />
        
        <Tab 
        label="Ajouter un produit" Icon={<AiOutlinePlus/>} onClick={selectAddTab}
        className={isAddSelected ? "is-active" : ""}
        />

        <Tab 
        label="Modifier un produit" 
        Icon={<MdModeEditOutline/>} 
        onClick={selectEditTab}
        className={isEditSelected ? "is-active" : ""}
        />
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
