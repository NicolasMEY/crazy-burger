import styled from "styled-components";

function Main(props) {
    return (
        <MainStyled >Main</MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
    background-color: green;
    /* height: calc(95vh - 10VH); // on peut utiliser cette méthode sans display flex au niveau du container */
    flex: 1;
`;



