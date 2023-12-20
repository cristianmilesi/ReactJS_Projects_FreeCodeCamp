import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'; 

function App() {

  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reinicarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className= 'freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto= 'Clic' 
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto='Reiniciar'
        esBotonClic={false}
        manejarClic={reinicarContador}/>
      </div>
    </div>
  );
}

export default App;
