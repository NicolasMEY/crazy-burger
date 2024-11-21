
import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo"

export default function Navbar({username}) {

  return (
    <NavbarStyled >
      <Logo/>
   
    <NavbarRightSide username={username}/>

</NavbarStyled>
  )
}


const NavbarStyled = styled.nav`
    background-color: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    padding: 0 20px;


`;

