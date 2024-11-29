// Données codées en dures et qui ne sont pas censées changer, contrairement à un state

import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import AddForm from "./AdminPanel/AddForm"
import EditForm from "./AdminPanel/EditForm"
// import {BiSun} from "react-icons/bi"


export  const getTabsConfig = () =>  [
  {
    index: "add",
    label:"Ajouter un produit" ,
    Icon:AiOutlinePlus,
    Content: <AddForm/>,
  },
  {
    index:"edit",
    label: "Modifier un produit",
    Icon:MdModeEditOutline, 
    Content: <EditForm/>,

  },
  // On peut rajouter autant d'onglets que l'on souhaite
  // {
  //   index:"theme",
  //   label: "Changer thème",
  //   Icon: BiSun, 
  // }
]

export const getTabSelected = (tabs, currenTabSelected) => tabs.find((tab) => tab.index === currenTabSelected)