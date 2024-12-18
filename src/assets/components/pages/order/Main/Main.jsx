import styled  from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket/Basket"
import {TransitionGroup, CSSTransition} from "react-transition-group"
import { adminAnimation } from "../../../../theme/animation";

function Main() {

const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)

    return (
        <MainStyled >
            <Basket />
            <div className="menu-and-admin">
                <Menu/>
                {isModeAdmin && 
                <TransitionGroup className="transition-group">
                    <CSSTransition
                    appear={true} classNames="admin" timeout={500}>
                        <Admin/>
                    </CSSTransition> 
                </TransitionGroup> 
                
                }


                {/* Equivalent =  {isModeAdmin ? <Admin/> : null } */}
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
    grid-template-columns: 25% 1fr;  
    /* grid-template-columns: 1fr;  */
    /* overflow-y: scroll; */
    

    .basket {
background-color: purple;
    }  

    .menu-and-admin {
        position: relative;
        overflow-y: hidden;
        display: grid;
        /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
    border-bottom-right-radius:${theme.borderRadius.extraRound};
    } 

${adminAnimation}
`;



