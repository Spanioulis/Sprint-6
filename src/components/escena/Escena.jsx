import React, { useState } from 'react';

// Importar componentes de estilos
import { Button, Card, Card2, BtnContent } from '../StyledComponents';

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
    const { counter, increase, decrease } = useCounter();

    // Condiciales para que no sea menor de 0 ni mayor de 3 el 'counter'
    if (counter < 0) {
        increase();
    } else if (counter > 3) {
        decrease();
    }

    // Recorrer array (param) y crear un nuevo <p></p> por cada elemento
    //! Poner una 'key' a cada elemento para evitar error en Consola
    const frases = param.map((frase, index) => {
        if (counter === index) {
            return (
                <>
                    <Card2 className="current" key={index}>
                        {frase}
                    </Card2>
                </>
            );
        }

        return (
            <>
                <Card className="card" key={index}>
                    {frase}
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
