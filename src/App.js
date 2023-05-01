import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hola from './components/Hola';

function App() {

  // const user = {
  //   nombre: "Paola Tamayo Buritica",
  //   edad: "19",
  //   color: "Amarillo"
  // }

  // const userFn = nombre => {
  //   console.log("Ricky")
  // }
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

   useEffect(() => {
    console.log("Total:" + contar)
   }, [contar]) 

  const encenderApagar = () => {
    // setStateCar(!stateCar)
    setStateCar(prevValue => !prevValue)
    setContar(contar + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Contar: {contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;