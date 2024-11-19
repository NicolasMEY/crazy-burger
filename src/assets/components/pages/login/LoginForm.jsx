import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


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
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Accédez à mon espace</button>
      </LoginFormStyled>
    ); 
};


const LoginFormStyled = styled.form`
  background-color: green;

`;



export default LoginForm;