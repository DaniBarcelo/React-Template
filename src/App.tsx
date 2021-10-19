import './App.css';
import Router from './infraestructure/router/Router';
import i18n from './infraestructure/i18n/i18n';
import 'bootstrap/dist/css/bootstrap.css'

//Sentencia para inicializar el i18n. NO BORRAR. PREGUNTAR A DANI
console.log(i18n.language);

function App() {
    return (
        <div className="App">
            <Router currentLang={"es"}
                //{logged={SessionStorage.isLoggedIn()}}
                logged={false}
            />
        </div>
    );
}

export default App;