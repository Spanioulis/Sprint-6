// import logo from './logo.svg';
// import './App.css';

//? Importamos el Component Escena para poder renderizarlo en App()
import { Escena } from './components/escena/Escena';

function App() {
    return (
        // Usaremos el tag <> vacío, aunque se podría usar <Fragment></Fragment>
        <>
            <Escena />
        </>
    );
}

export default App;
