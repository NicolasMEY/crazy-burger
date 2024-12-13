import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../../../theme/index"
import { IoChevronForwardOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../../reusable-ui/TextInput';
import Button from '../../reusable-ui/Button';
import { theme } from '../../../theme/index';
import { authenticateUser } from '../../../../api/user';
import Welcome from './Welcome';


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate()
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    authenticateUser(username)
      setUsername("");
      navigate(`order/${username}`)
    }
  
  const handleChange = (event) => { 
    setUsername(event.target.value)
   }

    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
          <Welcome/>
        <div>
          <TextInput 
          value={username} 
          onChange={handleChange} 
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle/>}
          className="input-login"
          version="normal"
          />
          <Button label={"Accéder à votre espace"} 
          Icon={<IoChevronForwardOutline />}
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
    margin-bottom: ${theme.gridUnit * 5}px;
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