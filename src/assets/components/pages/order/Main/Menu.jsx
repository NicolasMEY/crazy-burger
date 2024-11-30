import { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {

const {menu, isModeAdmin} = useContext(OrderContext)

  return (
    <MenuStyled className="menu" >
      {menu.map(({id, title, imageSource, price} ) => {
        return (
        <Card 
        key={id} 
        title={title} 
        imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT } leftDescription={formatPrice(price)}
        hasDeleteButton={isModeAdmin}
        />)
      } )
    }
    </MenuStyled>

  )
}

const MenuStyled = styled.div`
background-color: ${theme.colors.white};
box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
display: grid;
grid-template-columns: repeat(4, 1fr) ; 
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) ;
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  overflow-y: scroll;
`;