import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

function Main(props) {
    return (
        <MainStyled >
<div className="basket">BASKET</div>
<Menu/>




        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    /* height: calc(95vh - 10VH); // on peut utiliser cette méthode sans display flex au niveau du container */
    flex: 1;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius:${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    grid-template-columns: 25% 1fr;


    .basket {
background-color: purple;
    }
    


`;



