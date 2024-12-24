// Données codées en dures et qui ne sont pas censées changer, contrairement à un state
import AddForm from "./AdminPanel/AddForm/AddForm.jsx"
import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import EditForm from "./AdminPanel/EditForm/EditForm.jsx"
import HintMessage from "./AdminPanel/EditForm/HintMessage.jsx"

// import {BiSun} from "react-icons/bi"


export  const getTabsConfig = (hasAlreadyBeenClicked) =>  [
  {
    index: "add",
    label:"Ajouter un produit" ,
    Icon: <AiOutlinePlus/>,
    Content: <AddForm/>,
  },
  {
    index:"edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline/>, 
    Content: hasAlreadyBeenClicked ?<EditForm/> : <HintMessage/> ,
  },
  // On peut rajouter autant d'onglets que l'on souhaite
  // {
  //   index:"theme",
  //   label: "Changer thème",
  //   Icon: BiSun, 
  // }
]

export const getTabSelected = (tabs, currenTabSelected) => tabs.find((tab) => tab.index === currenTabSelected)