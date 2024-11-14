import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div>
            <h1>Errorpage</h1>
            <Link to="/">
            <button >Retourner à la page d'accueil</button>
            </Link>
        </div>
    );
};

export default ErrorPage;