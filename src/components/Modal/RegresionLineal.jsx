import {Col, Container} from "react-bootstrap";
import { InlineMath } from 'react-katex';
import {calcularVelocidad} from "../Calculos.jsx";
import {useEffect, useState} from "react";
import functionPlot from "function-plot";

export default function RegresionLineal(){
  const velocidadInicial = calcularVelocidad();
  const n = 11;

  const defaultTime = document.getElementById('tiempo').value;
  const [tiempo, setTiempo] = useState(document.getElementById('tiempo').value)
  const [inputs, setInputs] = useState([])
  const [outputs, setOutputs] = useState([])
  const [funcion, setFuncion] = useState('11.71921173420505x -+ 0.000005168840675473518')

  useEffect(() => {
    if(inputs.length === 0 || outputs.length === 0)
      return;
    setFuncion(calculateFunction())
  }, [inputs, outputs]);


  useEffect(() => {
    update();
  }, []);

  useEffect(() => {
    if(isNaN(f(defaultTime))){
      return;
    }
    functionPlot({
      target: '#regresionGraphic',
      xAxis: {domain: [0, defaultTime]},
      yAxis: {domain: [0, f(defaultTime)]},
      data: [{
        fn: funcion,
        range: [0, defaultTime],
      }]
    })
  }, [funcion]);

  function calculateFunction(){
    const A = calculateA();
    const B = calculateB();
    if(!isNaN(A) && !isNaN(B)){
      return `${A} + ${B}x`
    }
    return '0'
  }

  function f(x){
    return calculateA() + calculateB()*x
  }

  function update(){
    // clear
    inputs.length = 0;
    outputs.length = 0;
    const decimales = 4

    for(let i = 0; i < 1; i+= 0.1){
      let tempTime = (i * tiempo).toFixed(decimales);
      setInputs(inputs => [...inputs, tempTime])
      const distancia = (velocidadInicial*tempTime).toFixed(decimales);
      setOutputs(outputs => [...outputs, distancia])
    }

  }

  function media(array){
    let sum = 0;
    array.forEach(value => {
      sum += parseFloat(value);
    })
    return parseFloat(sum/parseFloat(array.length));
  }

  function sumatoriaCuadrados(array){
    let sum = 0;
    array.forEach(value => {
      sum += parseFloat(value)*parseFloat(value);
    })
    return sum;
  }

  function sumatoriaMultiplicacion(array1, array2){
    let sum = 0;
    array1.forEach((value, index) => {
      sum += parseFloat(value)*parseFloat(array2[index]);
    })
    return sum;
  }

  function calculateB(){
    return parseFloat((sumatoriaMultiplicacion(inputs,outputs) - n*media(outputs)*media(inputs)) / (sumatoriaCuadrados(inputs) - n*media(inputs)*media(inputs)))
  }

  function calculateA(){
    return parseFloat(media(outputs) - calculateB()*media(inputs))
  }

  function getRectaMejorAjustada(){
    return `\\^{v}(t) = ${calculateA()} + ${calculateB()}t`
  }

  function generateTablaDeDatos(){
    return(
      <Container>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th scope="col">Tiempo (s)</th>
            <th scope="col">Distancia (m)</th>
          </tr>
          </thead>
          <tbody>
          {inputs.map((input, index) => {
            return(
              <tr key={index}>
                <td>{input}</td>
                <td>{outputs[index]}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </Container>
    )
  }

  function changeTiempo(e){
    if(e.target.value < 0){
      e.target.value = 0;
    } else if(e.target.value > defaultTime){
      e.target.value = defaultTime;
    } else{
      setTiempo(e.target.value)
    }
  }

  return(
    <Col xs={6} style={{padding: '0px',}}
         className='border'
    >
      <p
        className='border fw-bold'
      >
        Regresión lineal
      </p>

      <p>
        Teniendo en cuenta el tiempo de caida del chorro
        <input type="number"
          style={{
            width: '70px',
            border: 'none',
            borderBottom: '1px solid black',
            textAlign: 'center'
          }}
               defaultValue={tiempo}
               onChange={changeTiempo}
               step={0.01}
        />
        {tiempo}s,
        descubre la distancia que recorrio basada en la velocidad del chorro
        ({calcularVelocidad()}m/s):
      </p>

      <InlineMath math={getRectaMejorAjustada() + "= m"} />
      <br/>
      <InlineMath math={`\\^{v}(${tiempo}) = ${f(tiempo)}m`} />


      <p
        className='fw-bold'
      >
        Gráficación de datos
      </p>

      <div id='regresionGraphic' />

      <h3
        className='fw-bold p-2'
      >
        Tabla de datos
      </h3>

      {generateTablaDeDatos()}

      <h4>
        Primero debemos hallar la ecuación de la recta que pasa por los puntos, la cual es:
      </h4>

      <InlineMath math={'\\^{y} = a + bx'} />
      <br/>
      <p>
        Donde, a es la ordenada al origen y b es la pendiente de la recta.
        <br/>

        <section
          className='p-2'
        >
          <InlineMath math={'b = \\frac{\\sum xy - n\\={x}\\={y}}{\\sum (x^2) - n\\={x}^2}'} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InlineMath math={'a = \\={y} - b\\={x}'} />
        </section>

        <h4>
          Reemplazando con nuestros datos:
        </h4>

        <section
          className='p-2'
        >
          <InlineMath math={`b = \\frac{ ${sumatoriaMultiplicacion(inputs,outputs)} - ${n}(${media(inputs)})(${media(outputs)}) }{  (${sumatoriaCuadrados(inputs)}) - ${n}(${media(inputs)})^2}`} />
          <br/>
          <InlineMath math={`b = ${calculateB()}`} />
          <br/>
          <InlineMath math={`a = ${media(outputs)} - ${calculateB()}*${media(inputs)}`} />
          <br/>
          <InlineMath math={`a = ${calculateA()}`} />
        </section>

        <p>
          Por tanto, la ecuación de la recta es:
          <br/>
          {/*<InlineMath math={'\\^{y} = a + bx'} />*/}
          <InlineMath math={`\\^{v}(t) = ${calculateA()} + ${calculateB()}t`} />
        </p>
      </p>

    </Col>
  )
}