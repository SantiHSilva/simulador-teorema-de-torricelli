import {Button, Modal} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function Info({showModal, setShowModal}){

  const handleClose = () => setShowModal(false);

  return(
    <Modal show={showModal} onHide={handleClose} size={'xl'}>
      <Modal.Header closeButton>
        <Modal.Title>Manual de Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Aquí deberia ir el manual de usuario
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}