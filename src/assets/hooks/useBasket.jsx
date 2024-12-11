import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import {deepClone, findIndexById, findObjectById, removeObjectById} from "../../utils/array"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY)


const handleAddToBasket = (idProductToAdd) => { 
const basketCopy = deepClone(basket)
const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

if(productAlreadyInBasket){
  incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
  return
}

  createNewBasketProduct(idProductToAdd, basketCopy, setBasket)
 }

const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
  const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
  basketCopy[indexOfBasketProductToIncrement].quantity += 1
  setBasket(basketCopy)
   }

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newbasket = [newBasketProduct, ...basketCopy]
    setBasket(newbasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
  }

  return { basket, handleAddToBasket, handleDeleteBasketProduct }
}

