import logo from './logo.svg';
import './App.css';
import Hola from './components/Hola';

function App() {

  const user = {
    nombre: "Paola Tamayo Buritica",
    edad: "19",
    color: "Amarillo"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Hola userInfo={user}/>
      </header>
    </div>
  );
}

export default App;