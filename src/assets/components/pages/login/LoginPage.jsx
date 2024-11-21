import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

const LoginPage = () => {
  
  return (
    <LoginPageStyled>
      <Logo className={"logo-login-page"}
      />
     <LoginForm/>
     </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/burger-background.jpg');
  background-size: cover; 
  background-position: center;  

  /* ::before {
    content: "";
    background: url('/images/burger-background.jpg');
    background-size: cover; 
  background-position: center;
background-blend-mode: darken;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
} */

.logo-login-page {
  transform: scale(2.2);
}

`;
export default LoginPage;


