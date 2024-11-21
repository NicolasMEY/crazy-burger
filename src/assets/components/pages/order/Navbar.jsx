import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({username}) {


  return (
    <NavbarStyled >
    <div className="left-side">left</div>
    <div className="right-side">right
      <h1>"Hey" {username}</h1>
      <Link to="/"><button
      >Déconnexion</button>
      </Link>
    </div>
</NavbarStyled>
  )
}


const NavbarStyled = styled.nav`
    background-color: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    .left-side {
      background-color: pink;
    }
    .right-side{
      background-color: purple
    }
    
    
`;

