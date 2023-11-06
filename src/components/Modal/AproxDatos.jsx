import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

// eslint-disable-next-line react/prop-types
export default function AproxDatos({showModal, setShowModal}){

  const expresionSecanteModificada = 'f(h_2) = \\sqrt{(2 * g * (h_2 - h_1) }-100m/s';
  const expresionRegresionLineal = 'v(t) = 20348-2480t = ? m/s';

  const handleClose = () => setShowModal(false);

  return(
    <Modal show={showModal} onHide={handleClose} size={'xl'} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Aproximaciones de velocidades</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Container>
          <Row
            className='text-center'
          >
            <Col xs={6} style={{padding: '0px',}}
              className='border'
            >
              <p
                className='border'
              >
                Regresión lineal
              </p>

              <p>
                Dada la velocidad final, puedes hallar una velocidad en un rango de tiempo.
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


            {/* Secante modificada */}

            <Col xs={6} style={{padding: '0px',}}
              className='border'
            >
              <p
                className='border'
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

              <img src="https://cdn.discordapp.com/attachments/1115448661602742316/1170229001730666506/396273447_1351911115454212_860745977931491377_n.png?ex=655847af&is=6545d2af&hm=1f1caf040db5f8339b07a6e8e841c512f005138825b0d9eedcde1a0d0948b36d&" />

              <p className='m-1 fw-bold'>
                Procedimiento
              </p>

              <section>
                blabl abla balba
              </section>

            </Col>
          </Row>

        </Container>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}