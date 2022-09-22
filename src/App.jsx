//? Importar Component Escena para poder renderizarlo en App()
import { Escena } from './components/escena/Escena';

//? Importar component Body de Styled.js
// import { Body } from './components/Styled';

// Importar [array] de textos que será el 'props' a enviar a <Escena />
import { textos } from './assets/textos';

function App() {
    return (
        // Usaremos el tag <></> vacío, aunque se podría usar <Fragment></Fragment>
        <div>
            <Escena param={textos} />
        </div>
    );
}

export default App;
