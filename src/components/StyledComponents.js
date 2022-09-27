import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin:0;
    padding: 0;

        @media (max-width: 992px) {
    font-size: 0.9rem;
    }
        @media (max-width: 768px) {
    font-size: 0.8rem;
    }
}

body {
    background-color: #4C6793;
    background-image: url(${({ url }) => url});
    background-position: 25%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 1.5rem;
}

h2 {
    font-size: 1.5rem;
}

`;

export const Welcome = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-around;
    padding-top: 1rem;
`;

export const Card = styled.p`
    align-items: center;
    background-color: ${({ value }) => {
        if (value === true) {
            return 'rgb(936, 125, 251)';
        } else {
            return 'rgb(240, 248, 255, 0.6)';
        }
    }};
    border-radius: 25px;
    border: 1px black solid;
    display: flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    height: 50px;
    justify-content: center;
    margin: 1rem;
    padding: 0 1rem 0 1rem;
`;

export const BtnContent = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Button = styled.button`
    background-color: #d0c9c0;
    border-radius: 5px;
    border: 1px black solid;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    height: 50px;
    margin: 0.2rem;
    padding: 0 1rem 0 1rem;
    width: 400px;

    &:hover {
        background-color: #7d6e83;
        color: aliceblue;
    }

    @media (max-width: 768px) {
        width: 250px;
    }
`;
