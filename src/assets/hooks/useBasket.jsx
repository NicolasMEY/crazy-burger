import { useState } from "react"
import { fakeBasket } from "../fakeData/fakeBasket"
import {deepClone, findIndexById, findObjectById, removeObjectById} from "../../utils/array"
import { setLocalStorage } from "../../utils/window"

export const useBasket = () => {
  const [basket, setBasket] = useState([])


const handleAddToBasket = (idProductToAdd, username) => { 
const basketCopy = deepClone(basket)
const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

if(productAlreadyInBasket){
  incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
  return
}

  createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username)
 }

const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
  const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
  basketCopy[indexOfBasketProductToIncrement].quantity += 1
  setBasket(basketCopy)
  setLocalStorage( username,basketCopy )
   }

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket, username) => {
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newbasket = [newBasketProduct, ...basketCopy]
    setBasket(newbasket)
    setLocalStorage( username,newbasket )

  }

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
  }

  return { basket, setBasket,  handleAddToBasket, handleDeleteBasketProduct }
}


