import {Button, Container, Modal, Row} from "react-bootstrap";
import SecanteModificada from "./SecanteModificada.jsx";
import RegresionLineal from "./RegresionLineal.jsx";

// eslint-disable-next-line react/prop-types
export default function AproxDatos({showModal, setShowModal}){

  const handleClose = () => setShowModal(false);

  return(
    <Modal show={showModal} onHide={handleClose} size={'xl'} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Obtener valores incognitos aproximados con</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Container>
          <Row className='text-center'>
           {/* <RegresionLineal />*/}
            <SecanteModificada />
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