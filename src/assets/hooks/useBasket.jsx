import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.LARGE)

const handleAddToBasket = (productToAdd) => { return }

    return {basket, handleAddToBasket}
 } 