import React from 'react';
import { Link } from 'react-router-dom';

const OrderPage = ({inputValue}) => {
    
    return (
        <div>
            <h1>Bonjour {inputValue}</h1>
            <Link to="/"><button onClick={handleLogout}
            >Déconnexion</button>
            </Link>
        </div>
    );
};

export default OrderPage;