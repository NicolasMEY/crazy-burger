import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");
   

  const handleSubmit = (e) => {
    e.preventDefault();
     
      setInputValue("");
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
        <Link to="/order">Vers OrderPage</Link>
      </form>
    );
};

export default LoginForm;