import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import OrderContext from "../../../context/OrderContext.jsx"
import { EMPTY_PRODUCT } from '../../../enums/product.jsx';
import { useMenu } from '../../../hooks/useMenu.jsx';


const OrderPage = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const {menu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()


const orderContextValue={
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected, 
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected, 
    setproductSelected,
    handleEdit,
    titleEditRef
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



