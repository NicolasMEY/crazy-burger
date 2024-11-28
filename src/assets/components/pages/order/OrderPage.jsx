import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import OrderContext from "../../../context/OrderContext.jsx"

const OrderPage = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isAddSelected, setIsAddSelected] = useState(true)
    const [isEditSelected, setIsEditSelected] = useState(false)
    const [currentTabSelected, setcurrentTabSelected] = useState("add")
  
const orderContextValue={
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
setIsCollapsed,
isAddSelected,
setIsAddSelected,
isEditSelected,
setIsEditSelected,
currentTabSelected, setcurrentTabSelected
}

    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className='container'>
                <Navbar />
                <Main/>
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

.container {
    height: 95vh;
    width: 1400px ;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
}
`;