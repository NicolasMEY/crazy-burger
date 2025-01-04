import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "@/utils/array";
//@ts-ignore
import { syncBothMenus } from "../../api/product";
import { MenuProduct } from "@/types/Product";


export const useMenu = () => { 
const [menu, setMenu] = useState<MenuProduct[] | undefined>(fakeMenu.LARGE)

const handleAdd = (newProduct : MenuProduct, username : string) => {
    // Cette fonction n'existe que si menu existe, if (menu) ici permet d'éliminber le cas undefined
    if (menu){
    // 1. Copie du tableau
    const menuCopy = deepClone(menu);
    // 2. Manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    // 3. Update du state
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated)
    }
};

const handleDelete = (idOfProductToDelete : string, username : string) => { 
    if (menu) {
//1. copy du state
    const menuCopy = deepClone(menu)
//2. manip de la copie du state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)
//3. update du state
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
    }
}

const handleEdit = (productBeingEdited : MenuProduct, username : string) =>
// Copy du state en mode deep clone, alternative plus puissante au destructuring qui reste superficiel [...menu]
 {if (menu) { const menuCopy = deepClone(menu)

//2. Manip de la copie du state
const indexOfProductToEdit = menu.findIndex((menuProduct) => menuProduct.id === productBeingEdited.id )
menuCopy [indexOfProductToEdit] = productBeingEdited

// 3. Update du state
setMenu(menuCopy)
syncBothMenus(username, menuCopy)
}
}

const resetMenu = (username : string) => { setMenu(fakeMenu.LARGE)
syncBothMenus(username, fakeMenu.LARGE) } 


return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}

}