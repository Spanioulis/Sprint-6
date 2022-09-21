// import logo from './logo.svg';
// import './App.css';

//? Importar Component Escena para poder renderizarlo en App()
import { Escena } from './components/escena/Escena';

// Importar [array] de textos que será el 'props' a enviar a <Escena />
import { textos } from './assets/textos';

function App() {
    return (
        // Usaremos el tag <></> vacío, aunque se podría usar <Fragment></Fragment>
        <>
            <Escena param={textos} />
        </>
    );
}

export default App;
