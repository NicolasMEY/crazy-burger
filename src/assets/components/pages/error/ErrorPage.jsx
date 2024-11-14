import React from 'react';

const ErrorPage = () => {

const handleLogout = () => {
    navigate("/login");
}

    return (
        <div>
            <h1>Errorpage</h1>
            <button onClick={handleLogout}>Retourner à la page d'accueil</button>
        </div>
    );
};

export default ErrorPage;