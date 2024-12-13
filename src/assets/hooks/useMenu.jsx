import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../../utils/array";
import { syncBothMenus } from "../../api/product";


export const useMenu = () => { 
const [menu, setMenu] = useState(fakeMenu.MEDIUM)

const handleAdd = (newProduct, username) => {
    const menuCopy = deepClone(menu);
    const menuUpdated = [newProduct, ...menuCopy];
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated)
};

const handleDelete = (idOfProductToDelete, username) => { 
//1. copy du state
    const menuCopy = deepClone(menu)
//2. manip de la copie du state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
//3. update du state
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
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

const resetMenu = (username) => { setMenu(fakeMenu.MEDIUM)
syncBothMenus(username, fakeMenu.MEDIUM) } 


return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}

}