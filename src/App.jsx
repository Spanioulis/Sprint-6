import { useState } from 'react';
// Importar componente Escena para poder renderizarlo en App()
import { Escena } from './components/escena/Escena';
// Importar [array] de textos que será el 'props' a enviar a <Escena />
import { textos } from './assets/textos';
import { BtnContent, Button, Welcome, GlobalStyle } from './components/StyledComponents';

function App () {
    const [ click, setClick ] = useState(false);
    const handleClick = () => {
        setClick(true);
    };
    return (
        // Usaremos el tag <></> vacío, aunque se podría usar <Fragment></Fragment>
        <>
            {click === false ? (
                <>
                    <GlobalStyle />
                    <Welcome>
                        <h2>Benvingut a la teva història...</h2>
                        <Button onClick={handleClick}>Descobreix-la</Button>
                    </Welcome>
                </>
            ) : (
                <>
                    <Escena param={textos} />
                    <BtnContent>
                        <Button onClick={() => setClick(false)}> Torna a començar...</Button>
                    </BtnContent>
                </>
            )}
        </>
    );
}

export default App;
