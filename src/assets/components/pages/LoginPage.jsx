import React, { useState } from "react";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() === "") {
      setErrorMessage("le prénom est obligatoire.");
    } else {
      alert(`Bonjour ${firstName}!`);
      // Vider le champs aprés soumission et réinitialiser le message d'erreur
      setFirstName("");
      setErrorMessage("");
    }
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <p>{ErrorMessage}</p>
        <button type="submit">Accédez à votre espace</button>
      </form>
    </div>
  );
};

export default LoginPage;

// nb : La méthode trim() en JavaScript est utilisée pour supprimer les espaces blancs au début et à la fin d'une chaîne de caractères. Cela permet de s'assurer que même si l'utilisateur entre des espaces avant ou après son prénom, ils ne seront pas pris en compte lors de la validation. Dans mon code, on utilise firstName.trim() dans la condition de validation pour éviter que des espaces ajoutés par accident ne fassent échouer la validation, même si le champ est techniquement rempli par l'utilisateur.
