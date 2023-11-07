import {Col, Container} from "react-bootstrap";
import { InlineMath } from 'react-katex';
import functionPlot from "function-plot";
import {useEffect, useState} from "react";

export default function SecanteModificada(){

  const [raiz, setRaiz] = useState(NaN);
  const [resultadosProcedimientos, setResultadosProcedimientos] = useState([])
  const [velocidad, setVelocidad] = useState(100);
  const d = 0.01
  const h_1 = parseFloat(document.getElementById('nivelAbertura').value);
  const g = 9.81
  const expresionSecanteModificada = `f(h_2) = \\sqrt{2 * g * (h_2 - ${h_1}) }-${velocidad}/s = ${raiz} `;
  const resultados = []

  useEffect(() => {
    reupdate();
  }, [velocidad, raiz]);

  function reupdate(){
    functionPlot({
      title: "Gráfica de la secante modificada",
      target: '#graficasecante',
      yAxis: {domain: [-2, 2]},
      xAxis: {domain: [(raiz - 20), (raiz + 20)]},
      data: [{
        fn: `sqrt(2*9.81*(x-${h_1}))-${velocidad}`,
        secants: resultados
      }]
    })
    recalculate();
  }

  function f(x){
    return (Math.sqrt(2*g*(x-h_1))-velocidad)
  }

  function recalculate(){
    setResultadosProcedimientos([])
    resultados.length = 0
    let iteracion = 0
    const d = 0.01
    let x_0 = h_1
    let error = 100

    while(f(x_0) !== 0 && error > 0.01){
      iteracion+=1
      let x_1 = x_0 - (f(x_0)*(d*x_0))/(f(x_0+(d*x_0))-f(x_0))
      error = Math.abs((x_0-x_1)/x_0)*100
      const temp = estilizar(iteracion, x_0, x_1, error)
      setResultadosProcedimientos(resultadosProcedimientos => [...resultadosProcedimientos, temp])
      resultados.push({
        x0: x_0,
        x1: x_1
      })

      x_0 = x_1
    }

    setRaiz(x_0)
  }

  function estilizar(iteracion, x0, x1, error){

    console.log("Iteración: ", iteracion, "x0: ", x0, "x1: ", x1, "error: ", error)

    const decimales = 4
    x0 = parseFloat(x0.toFixed(decimales))
    x1 = parseFloat(x1.toFixed(decimales))

    return(
      <Container
        className='p-2'
      >
        <h4>
          Iteración {iteracion}, x<sub>0</sub> = {x0}
        </h4>
        <InlineMath math={`x_i = ${x0} - \\frac{ ${d} ${x0} * ${f(x0)} }{ ${f(x0+(d*x0))} - ${f(x0)}} = ${x1}`} />
        <br/><br/>
        <InlineMath math={`f(${x1}) = \\sqrt{2 * ${g} * (${x1} - ${h_1}) }-${velocidad}m/s = ${f(x1).toFixed(4)}`} />
        <br/><br/>
        <InlineMath math={`E_r = |\\frac{ ${x0}-${x1}}{${x0}}| * 100\\% = ${error} \\%`}/>
      </Container>
    )
  }

  function getProcedimiento(){
    return(
      <Container>
        {resultadosProcedimientos.map((resultadosProcedimiento) => (
          <div
            key={resultadosProcedimiento.props.children[0].props.children}
          >
            {resultadosProcedimiento}
          </div>
        ))}
      </Container>
    )
  }

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
        ¿Cuál debe ser el nivel de agua para que la velocidad de la salida del agua sea de
        <input type='number' defaultValue={100} onChange={(e) => setVelocidad(parseFloat(e.target.value))}
          style={{
            width: '50px',
            border: 'none',
            borderBottom: '1px solid black',
            textAlign: 'center'
          }}
        />
        m/s teniendo en cuenta que el nivel de abertura es de {h_1} metros?
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
        <p>
          El método de la secante establece que:
        </p>
        <InlineMath math={'x_i = x_0 - \\frac{dx_0*f(x_0)}{f(x_0+dx_0)-f(x_0)}'} />
        &nbsp;&nbsp;&nbsp;
        <InlineMath math={'E_r = |\\frac{x_0-x_i}{x_0}| * 100\\%'}/>
        <br/> <br/>
        <Container>
          Para hallar el valor del nivel de agua que necesitaremos para que la velocidad de salida del agua sea de {velocidad}m/s, utilizaremos el método de la secante modificada para hallar el valor de x iterando hasta que el error sea menor a 0.01% o hasta encontrar la raíz.
        </Container>

        {getProcedimiento()}

      </section>

    </Col>
  )
}