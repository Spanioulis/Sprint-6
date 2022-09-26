/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

// Importar componentes de estilos
import { Button, Card, BtnContent, GlobalStyle } from '../StyledComponents';

// Lo exportamos con nombre explícito (mismo que el archivo), no por default
// Al contener un único <tag> o elemento, no hace falta envolverlo en un contenedor padre

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return {
        counter,
        increase,
        decrease
    };
};

export const Escena = ({ param }) => {
    // Obtener imágenes (de forma dinámica)
    const images = require.context('../../assets/img/');
    const { counter, increase, decrease } = useCounter();

    // Condiciales para que no sea menor de 0 ni mayor de 3 el 'counter'
    if (counter < 0) {
        return increase();
    } else if (counter > 3) {
        return decrease();
    }

    // Recorrer array (param) y crear un nuevo <p></p> por cada elemento
    //! Poner una 'key' a cada elemento para evitar error en Consola
    const frases = param.map((frase, index) => {
        let currentText;

        // Mejorar código con &&
        // counter === index ? (currentText = true) : (currentText = false);
        counter === index && (currentText = true);

        return (
            <>
                {/* <GlobalStyle value={images(`./${index + 1}.jpg`)} param={index}/> */}
                <GlobalStyle url={images(`./${counter + 1}.jpg`)} />
                <Card value={currentText} className="card" key={index}>
                    {frase.txt}
                </Card>
            </>
        );
    });

    // Devolver el conjunto de frases en un contenedor padre vacío, para que no se genere un contenedor (p, div...) que pueda causarnos problemas
    return (
        <>
            <BtnContent>
                <Button onClick={decrease}>Anterior</Button>
                <Button onClick={increase}>Següent</Button>
            </BtnContent>
            {frases}
        </>
    );
};
