import React, { useState } from 'react';

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      alert(`Bonjour ${inputValue}!`);
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
      </form>
    );
};

export default LoginForm;