import {useEffect, useState} from 'react'
import './assets/index.css';
import Calculos from "./components/Calculos.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  const [alturaAbertura, setAlturaAbertura] = useState(3) //m
  const [diametroAbertura, setDiametroAbertura] = useState(1) //m
  const [nivelAgua, setNivelAgua] = useState(10) //m

  useEffect(() => {
    import('./logic/LoadLogic.js');
  }, []);

  return (
    <>
      <canvas id="canvas" />
      <Calculos
        alturaAbertura={alturaAbertura}
        setAlturaAbertura={setAlturaAbertura}
        diametroAbertura={diametroAbertura}
        setDiametroAbertura={setDiametroAbertura}
        nivelAgua={nivelAgua}
        setNivelAgua={setNivelAgua}
      />

      <Dashboard />
    </>
  )
}

export default App
