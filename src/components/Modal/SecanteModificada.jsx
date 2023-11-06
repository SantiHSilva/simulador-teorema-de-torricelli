import {Col} from "react-bootstrap";
import { InlineMath } from 'react-katex';
import functionPlot from "function-plot";
import {useEffect} from "react";

export default function SecanteModificada(){

  const expresionSecanteModificada = 'f(h_2) = \\sqrt{2 * g * (h_2 - h_1) }-100m/s';

  function calculateSecante(){
    function f(x){
      const g = 9.81
      const h_1 = 20
      return (Math.sqrt(2*g*(x-h_1))-100)
    }
    const d = 0.01
    let x_0 = 20
    let iteracion = 0
    const resultados = []

    while(f(x_0) !== 0){
      iteracion++
      let x_1 = x_0 - (f(x_0)*(d*x_0))/(f(x_0+(d*x_0))-f(x_0))
      console.log("Iteración: " + iteracion,x_1, f(x_1))
      resultados.push({
        x0: x_0,
        x1: x_1
      })
      x_0 = x_1
      // Añadir a la lista
    }

    console.log(resultados)
    return resultados
  }

  useEffect(() => {
    const resultados = calculateSecante()
    functionPlot({
      target: '#graficasecante',
      yAxis: {domain: [-2, 2]},
      xAxis: {domain: [(529 - 20), (529 + 20)]},
      data: [{
        fn: 'sqrt(2*9.81*(x-20))-100',
        secants: resultados
      }]
    })
  }, []);

  return(
    <Col xs={6} style={{padding: '0px',}}
         className='border'
    >
      <p
        className='border fw-bold'
      >
        Método de la secante modificada
      </p>

      <p>
        ¿Cuál debe ser el nivel de agua para que la velocidad de la salida del agua sea de 100m/s teniendo en cuenta que el nivel de abertura es de n metros?
      </p>

      <InlineMath math={expresionSecanteModificada} />

      <p className='m-1 fw-bold'>
        Gráfica del método
      </p>

      <div
        id='graficasecante'
      />

      <p className='m-1 fw-bold'>
        Procedimiento
      </p>

      <section>
        blabl abla balbaaejgbiusgrele
        r fiwvbeuwtfhr-g
        .ñ
        egwf- e
        g
      </section>

    </Col>
  )
}