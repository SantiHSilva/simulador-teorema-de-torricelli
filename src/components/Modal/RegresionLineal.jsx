import {Col, Container} from "react-bootstrap";
import { InlineMath } from 'react-katex';
import {calcularVelocidad} from "../Calculos.jsx";

// eslint-disable-next-line react/prop-types
export default function RegresionLineal(){
  const expresionRegresionLineal = 'v(t) = 20348-2480t = ? m/s';
  const tiempo = document.getElementById('tiempo').value

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
        Dado un tiempo ({tiempo}), descubre la distancia que recorrio basada en la velocidad del chorro ({calcularVelocidad()}m/s):
      </p>

      <InlineMath math={expresionRegresionLineal} />

      <p
        className='fw-bold'
      >
        Gráficación de datos
      </p>

      <img src="https://cdn.discordapp.com/attachments/1115448661602742316/1170180974726873088/image.png?ex=65581af5&is=6545a5f5&hm=cfaa55e5363a772eb972ecf45f7a39a36556ad3540dfd9caabc85d5407c149fe&"/>

      <p
        className='fw-bold'
      >
        Tabla de información
      </p>

      <Container>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th scope="col">Tiempo (s)</th>
            <th scope="col">Velocidad (m/s)</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0</td>
            <td>20348</td>
          </tr>
          <tr>
            <td>1</td>
            <td>17868</td>
          </tr>
          </tbody>
        </table>
      </Container>

    </Col>
  )
}