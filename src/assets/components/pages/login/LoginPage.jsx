import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

const LoginPage = () => {
  

  return (
    <LoginPageStyled>
      <Logo/>
     <LoginForm/>
     </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default LoginPage;


