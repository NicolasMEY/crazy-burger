import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    );
};

export default LoginForm;