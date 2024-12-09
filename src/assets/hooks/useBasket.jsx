import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"
import {deepClone} from "../../utils/array.jsx"
import { MdProductionQuantityLimits } from "react-icons/md"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.SMALL)

const handleAddToBasket = (productToAdd) => { 
    // 1. copy du state
const basketCopy = deepClone(basket)

const isPoductAlreadyInBasket = find(productToAdd.id, basketCopy) !== undefined
console.log("isProductAlreadyInBasket:", isPoductAlreadyInBasket);

    // 2. manip dela copie du state
        // 1er cas le produit n'est pas déja dans le basket
        if(!isPoductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1
            }

            const basketUpdated = [newBasketProduct, ...basketCopy]
            // Pour avoir le dernier produit en haut on écrit bien dans cet ordre là

            // 3. update du state
            setBasket(basketUpdated)
        }

         // 2ème cas le produit est déja dans le basket
    }

    return {basket, handleAddToBasket}
 } 