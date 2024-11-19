import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "../../../theme/index"
import { BsPersonCircle } from "react-icons/bs";


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
      <hr />
      <h2>Connectez-vous</h2>
        <div className='input-with-icon'>
        <BsPersonCircle className='icon' />
          <input
            type="text"
            placeholder="Entrez votre prénom"
            value={inputValue}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Accédez à mon espace</button>
      </LoginFormStyled>
    ); 
};


const LoginFormStyled = styled.form`
  background-color: green;
  text-align: center;
  max-width: 500px;
  max-height: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }
  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .input-with-icon{
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
  }

  .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
  }

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
  }

  &::placeholder {
    background: white;
    color: lightgrey;
  }


`;



export default LoginForm;