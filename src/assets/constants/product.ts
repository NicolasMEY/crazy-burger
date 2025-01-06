import { MenuProduct } from "@/types/Product"

// export const EMPTY_PRODUCT  = Object.freeze() = méthode JavaScript
// Le fait de retirer freeze ici va permettre de réassignation lors de la phase de compile time.

  export const EMPTY_PRODUCT : MenuProduct =  {
    id: "",
    title: "",
    imageSource: "", 
    price: 0,
    isAvailable:true,
    isPublicised: false,
  } 

  export const IMAGE_COMING_SOON = "/images/coming-soon.png"
  export const IMAGE_NO_STOCK = "/images/stock-epuise.png"

  export const BASKET_MESSAGE =  {
    EMPTY : "Votre commande est vide.",
    LOADING : "Chargement en cours...",
    NOT_AVAILABLE : "Non disponible",
  } as const

  // export enum BASKET_MESSAGE  {
  //   EMPTY = "Votre commande est vide.",
  //   LOADING = "Chargement en cours...",
  //   NOT_AVAILABLE = "Non disponible",
  // } 

  // as const : va empêcher une réassignation durant la phase de compilation uniquement

