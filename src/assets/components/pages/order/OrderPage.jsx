import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import OrderContext from "../../../context/OrderContext.jsx"
import {fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from '../../../enums/product.jsx';
import { deepClone } from '../../../../utils/array.jsx';


const OrderPage = () => {
    const [isModeAdmin, setIsModeAdmin] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [currentTabSelected, setCurrentTabSelected] = useState("edit")
    const [menu, setMenu] = useState(fakeMenu.MEDIUM)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()



const handleAdd = (newProduct) => {
            const menuCopy = deepClone(menu);
            const menuUpdated = [newProduct, ...menuCopy];
            setMenu(menuUpdated);
        };

const handleDelete = (idOfProductToDelete) => { 
        //1. copy du state
            const menuCopy = deepClone(menu)
        //2. manip de la copie du state
            const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
        //3. update du state
            setMenu(menuUpdated)
        }

const handleEdit = (productBeingEdited) =>
// Copy du state en mode deep clone, alternative plus puissante au destructuring qui reste superficiel [...menu]
{ const menuCopy = deepClone(menu)
    //2. Manip de la copie du state
const indexOfProductToEdit = menu.findIndex((menuProduct) => menuProduct.id === productBeingEdited.id )
menuCopy [indexOfProductToEdit] = productBeingEdited
// 3. Update du state
setMenu(menuCopy)
 }

const resetMenu = () => { setMenu(fakeMenu.MEDIUM) }

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



