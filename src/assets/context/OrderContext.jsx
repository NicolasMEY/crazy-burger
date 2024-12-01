import { createContext } from "react";

export default createContext( {
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
    resetMenu: () => {},

    newProduct : [],
    setNewProduct: () => {},
})
