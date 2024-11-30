import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../../../theme/index"
import { IoChevronForwardOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../../reusable-ui/TextInput';
import Button from '../../reusable-ui/Button';
import { theme } from '../../../theme/index';


const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate()
   
  const handleSubmit = (e) => {
    e.preventDefault();
      setInputValue("");
      navigate(`order/${inputValue}`)
    }
  
  const handleChange = (event) => { 
    setInputValue(event.target.value)
   }

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
        <div>
          <TextInput value={inputValue} onChange={handleChange} placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle/>}
          />
          <Button label={"Accéder à votre espace"} Icon={<IoChevronForwardOutline />}
          className="input-login"
          version="normal"
        />
        </div>
      </LoginFormStyled>
    ); 
};


const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  max-height: 400px;
  margin: 0px auto;
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: 40px;
    margin-top: 40px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }
  
  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }
 .input-login {
  margin: 18px 0; // Must be handle in Parent
 }
`;

export default LoginForm;