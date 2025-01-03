import { findObjectById } from "../../../../../../../utils/array.jsx";
import { convertStringToBoolean } from "../../../../../../../utils/string.js";

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu);
    if (isNaN(menuProduct.price)) return total;

    if (convertStringToBoolean(menuProduct.isAvailable) === false) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);
};
