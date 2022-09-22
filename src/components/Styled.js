import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    background-color: aliceblue;
    padding-top: 1rem;
}
`;

export const Card = styled.span`
    background-color: white;
    border-radius: 25px;
    border: 1px black solid;
    display: flex;
    justify-content: center;
    margin: 1rem;
`;
