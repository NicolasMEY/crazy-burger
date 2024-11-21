import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const OrderPage = () => {
    const {username} = useParams()
    
    return (
        <OrderPageStyled>
            <div className='container'>
                <div className='navbar'>
                    Navbar
                    <h1>Bonjour {username}</h1>
                    <Link to="/"><button
                    >Déconnexion</button>
                    </Link>
                </div>
                <div className="main">Main</div>
            </div>
        </OrderPageStyled>
    );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background-color: orange;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

.container {
    background-color: red;
    height: 95vh;
    width: 1400px ;
    display: flex;
    flex-direction: column;

    .navbar {
    background-color: blueviolet;
    height: 10vh;
    
}
    .main {
    background-color: green;
    /* height: calc(95vh - 10VH); // on peut utiliser cette méthode sans display flex au niveau du container */
    flex: 1;
}
}



`;