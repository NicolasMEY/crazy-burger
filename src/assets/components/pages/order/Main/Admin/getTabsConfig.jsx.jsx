// Données codées en dures et qui ne sont pas censées changer, contrairement à un state

import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
// import {BiSun} from "react-icons/bi"


export  const getTabsConfig = () =>  [
  {
    index: "add",
    label:"Ajouter un produit" ,
    Icon:AiOutlinePlus,
  },
  {
    index:"edit",
    label: "Modifier un produit",
    Icon:MdModeEditOutline, 
  },
  // On peut rajouter autant d'onglets que l'on souhaite
  // {
  //   index:"theme",
  //   label: "Changer thème",
  //   Icon: BiSun, 
  // }
]

export const getTabSelected = (tabs, currenTabSelected) => tabs.find((tab) => tab.index === currenTabSelected)