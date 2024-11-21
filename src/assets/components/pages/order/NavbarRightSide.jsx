import { Link } from "react-router-dom";
import styled from "styled-components";

function NavbarRightSide({username}) {
    return (
        <NavbarRightSideStyled className="right-side">right
        <h1>"Hey" {username}</h1>
        <Link to="/"><button
        >Déconnexion</button>
        </Link>
      </NavbarRightSideStyled>
    );
}

const NavbarRightSideStyled = styled.div`
      background-color: purple
    
`;
export default NavbarRightSide;