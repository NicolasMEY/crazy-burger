import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import OrderContext from "../../../context/OrderContext.jsx"
import { EMPTY_PRODUCT } from '../../../constants/product';
import { useMenu } from '../../../hooks/useMenu';
import { useBasket } from '../../../hooks/useBasket';
import { findObjectById } from '../../../../utils/array';
import { useParams } from 'react-router-dom';
import { initialiseUserSession } from './helpers/initialiseUserSession.jsx';


const OrderPage = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const {menu,setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
    const {basket,setBasket, handleAddToBasket, handleDeleteBasketProduct} = useBasket()
    const {username} = useParams()

    const handleProductSelected = (idProductClicked) => {
        const productClickedOn = findObjectById(idProductClicked, menu)
        setIsCollapsed(false)
        setCurrentTabSelected("edit")
        // const productClickedOn = menu.find((product) => product.id === idProductClicked)
         setproductSelected(productClickedOn)
         setTimeout(() => titleEditRef.current.focus(), 0)
    }

    useEffect(() => {
        initialiseUserSession(username, setMenu,setBasket)
    }, []) 


const orderContextValue={
    username,
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
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
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



