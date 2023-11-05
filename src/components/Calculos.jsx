import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {useEffect} from "react";

export default function Calculos({alturaAbertura, setAlturaAbertura, diametroAbertura, setDiametroAbertura, nivelAgua, setNivelAgua}){

  useEffect(() => {

    function moveContainer(){
      const container = document.getElementById('ControlParams');
      const canvas = document.getElementById('canvas');
      // hacer el canvas de tamaño completo
      const reduce = 20;
      canvas.width = window.innerWidth - reduce;
      canvas.height = window.innerHeight - reduce;
      // Mover el container hacia la esquina superior derecha del canvas
      container.style.top = reduce + 'px';
      container.style.left = `${canvas.width - container.offsetWidth}px`;
    }

    moveContainer();
    window.addEventListener('resize', moveContainer);

  }, []);

  return(
    <Container
      id='ControlParams'
      className='ControlParams text-center'
      style={{
        padding: '0px',
        backgroundColor: '#c3f7c8',
        position: 'absolute',
        border: '1px solid black',
        width: '45%',
      }}
    >
      <p
        className={'border rounded-bottom'}
        style={{
          backgroundColor: 'white',
        }}
      >
        Datos a ingresar
      </p>

      <section
        className='d-flex justify-content-center'
      >
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Altura Abertura</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center' value={alturaAbertura}/>
            <Button size={'sm'} disabled variant='success'>m</Button>
          </InputGroup>
        </Form>
        &nbsp;&nbsp;
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Nivel de agua</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center' value={nivelAgua}/>
            <Button size={'sm'} disabled variant='success'>m</Button>
          </InputGroup>
        </Form>
        &nbsp;&nbsp;
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Diametro abertura</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center' value={diametroAbertura}/>
            <Button size={'sm'} disabled variant='success'>m</Button>
          </InputGroup>
        </Form>
      </section>

      &nbsp;

      <p
        className={'border rounded'}
        style={{
          backgroundColor: 'white',
        }}
      >
        Datos calculados
      </p>

      <section
        className='d-flex justify-content-center'
      >
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Velocidad</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center'/>
            <Button size={'sm'} disabled variant='success'>m/s</Button>
          </InputGroup>
        </Form>
        &nbsp;&nbsp;
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Presión interna</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center'/>
            <Button size={'sm'} disabled variant='success'>Pascal</Button>
          </InputGroup>
        </Form>
        &nbsp;&nbsp;
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Área abertura</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center'/>
            <Button size={'sm'} disabled variant='success'>m²</Button>
          </InputGroup>
        </Form>
      </section>

      &nbsp;

      <section
        className='d-flex justify-content-center'
      >
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Tiempo</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center'/>
            <Button size={'sm'} disabled variant='success'>s</Button>
          </InputGroup>
        </Form>
        &nbsp;&nbsp;
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Distancia</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center'/>
            <Button size={'sm'} disabled variant='success'>m</Button>
          </InputGroup>
        </Form>
        &nbsp;&nbsp;
        <Form
          style={{
            width: '25%',
          }}
        >
          <Form.Label>Caudal</Form.Label>
          <InputGroup>
            <Form.Control type="number" size='sm' className='text-center'/>
            <Button size={'sm'} disabled variant='success'>lts/s</Button>
          </InputGroup>
        </Form>
      </section>

      &nbsp;

    </Container>
  )

}