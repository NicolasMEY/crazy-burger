import { useState } from "react"
import {deepClone, findIndexById, findObjectById, removeObjectById} from "../../utils/array"
import { setLocalStorage } from "../../utils/window"
import { BasketProduct } from "@/types/Product"


export const useBasket = () => {
  const [basket, setBasket] = useState<BasketProduct[]>([])

const handleAddToBasket = (idProductToAdd : string, username : string) => { 
const basketCopy = deepClone(basket)
const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

if(productAlreadyInBasket){
  incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
  return
}

  createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username)
 }

const incrementProductAlreadyInBasket = (idProductToAdd : string, basketCopy : BasketProduct[], username : string) => {
  const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
  basketCopy[indexOfBasketProductToIncrement].quantity += 1
  setBasket(basketCopy)
  setLocalStorage( username,basketCopy )
   }

  const createNewBasketProduct = (idProductToAdd : string, basketCopy : BasketProduct[], setBasket : React.Dispatch<React.SetStateAction<BasketProduct[]>>, username : string) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newbasket = [newBasketProduct, ...basketCopy]
    setBasket(newbasket)
    setLocalStorage( username,newbasket )
  }

  const handleDeleteBasketProduct = (idBasketProduct : string, username : string) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
    setLocalStorage( username,basketUpdated )
  }

  return { basket, setBasket,  handleAddToBasket, handleDeleteBasketProduct }
}

