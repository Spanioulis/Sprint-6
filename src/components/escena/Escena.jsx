// Lo exportamos con nombre explícito (mismo que el archivo), no por default
// Al contener un único <tag> o elemento, no hace falta envolverlo en un contenedor padre

export const Escena = ({ param }) => {
    // Recorrer array (param) y crear un nuevo <p></p> por cada elemento
    // Poner una 'key' a cada elemento para evitar error en Consola
    const frases = param.map((frase, index) => {
        return <p key={index}>{frase}</p>;
    });

    // Devolver el conjunto de frases en un contenedor padre vacío, para que no se genere un contenedor (p, div...) que pueda causarnos problemas
    return <>{frases}</>;
};
