import { createContext } from "react";

export default createContext( {
    username: "",
    isModeAdmin: false, setIsModeAdmin: () => {},

    isCollapsed: false, setIsCollapsed: () => {},

    // isAddSelected : false,
    // setIsAddSelected: () => {}, 
    // isEditSelected: false,
    // setIsEditSelected: () => {},

    currentTabSelected: false,
    setcurrentTabSelected: () => {},

    menu : [],
    handleAdd: () => {},
    handleDelete: () => {},
    handleEdit: () => {},
    resetMenu: () => {},

    newProduct : {},
    setNewProduct: () => {},

    productSelected: {},
    setproductSelected:() => {},
    handleProductSelected:() => {},

    titleEditRef: {},

    basket: [],
    handleAddToBasket: () => {},
    handleDeleteBasketProduct: () => {},
})
