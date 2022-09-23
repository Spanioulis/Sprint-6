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
    background-color: ${({ value }) => {
        if (value === true) {
            return '#ecc5fb';
        } else {
            return 'aliceblue';
        }
    }};
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
    background-color: #d0c9c0;
    border-radius: 5px;
    border: 1px black solid;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: large;
    height: 50px;
    margin: 0.2rem;
    padding: 0 1rem 0 1rem;
    width: 400px;

    &:hover {
        background-color: #7d6e83;
        color: aliceblue;
    }
`;
