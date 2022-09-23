import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin:0;
    padding: 0;
}

body {
    background-color: aliceblue;
    padding-top: 1rem;

    @media (max-width: 968px) {
    font-size: 0.8rem;
}
}
`;

export const Card = styled.p`
    align-items: center;
    background-color: white;
    border-radius: 25px;
    border: 1px black solid;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    height: 50px;
    justify-content: center;
    margin: 1rem;
    padding: 0 1rem 0 1rem;
`;
export const Card2 = styled.p`
    align-items: center;
    background-color: #ecc5fb;
    border-radius: 25px;
    border: 1px black solid;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    height: 50px;
    justify-content: center;
    margin: 1rem;
    padding: 0 1rem 0 1rem;
`;

export const BtnContent = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    /* align-items: center; */
    background-color: #d0c9c0;
    border-radius: 5px;
    border: 1px black solid;
    /* display: flex; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: large;
    height: 50px;
    /* justify-content: center; */
    margin: 0.2rem;
    padding: 0 1rem 0 1rem;
    width: 400px;

    &:hover {
        background-color: #7895b2;
        color: aliceblue;
    }
`;
