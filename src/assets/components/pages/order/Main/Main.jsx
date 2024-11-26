import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

function Main(props) {
    return (
        <MainStyled >
            {/* <div className="basket">BASKET</div> */}
            <div className="menu-and-admin">
                <Menu/>
                <div className="admin">Admin</div>
            </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
    background-color: ${theme.colors.background_white};
    height: calc(95vh - 10VH); // on peut utiliser cette méthode sans display flex au niveau du container 
    /* flex: 1; */

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius:${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    /* grid-template-columns: 25% 1fr;  */
    grid-template-columns: 1fr; 
    /* overflow-y: scroll; */
    

    /* .basket {
background-color: purple;
    }  */

    .menu-and-admin {
        position: relative;
        overflow-y: hidden;
        display: grid;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius:${theme.borderRadius.extraRound};
        
        .admin {
        background-color: green;
        height: 250px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    }
    
    
`;



