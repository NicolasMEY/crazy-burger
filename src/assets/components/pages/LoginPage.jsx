import React, { useState } from "react";

const LoginPage = () => {
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
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  );
};

export default LoginPage;


