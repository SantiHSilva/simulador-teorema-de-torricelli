import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {useEffect} from "react";

function calcularVelocidad(){
  try{
    const g = 9.81;
    const nivelAgua = document.getElementById('nivelAgua').value;
    const alturaAbertura = document.getElementById('nivelAbertura').value;
    return Math.sqrt(2*g*(nivelAgua - alturaAbertura));
  } catch (e) {
    return 11.719214990774766; // Valor por defecto con el que se inicia la app
  }
}

// eslint-disable-next-line react/prop-types
function Calculos({alturaAbertura, setAlturaAbertura, diametroAbertura, setDiametroAbertura, nivelAgua, setNivelAgua}){

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

  function changeAlturaAbertura(e) {
    const value = parseFloat(e.target.value);
    console.log(value, nivelAgua)
    if (value < 0) {
      alert("La altura de la abertura no puede ser menor a 0")
      e.target.value = 0;
    } else if (value > nivelAgua) {
      alert("La altura de la abertura no puede ser mayor al nivel de agua")
      e.target.value = nivelAgua;
    } else {
      setAlturaAbertura(value);
    }
  }

  function changeNivelAgua(e){
    const value = parseFloat(e.target.value);
    console.log(value, alturaAbertura)
    if(value < alturaAbertura){
      alert("El nivel de agua no puede ser menor a la altura de la abertura")
      e.target.value = alturaAbertura;
    } else{
      setNivelAgua(value);
    }
  }

  function changeDiametroAbertura(e){
    const value = e.target.value;
    if(value < 0){
      alert("El diámetro de la abertura no puede ser menor a 0")
      e.target.value = 0;
    } else{
      setDiametroAbertura(value);
    }
  }

  function calcularPresionInterna(){
    const g = 9.81;
    const densidadAgua = 1000;
    return densidadAgua*g*(nivelAgua - alturaAbertura);
  }

  function calcularAreaAbertura(){
    return Math.PI*Math.pow(diametroAbertura/2, 2);
  }

  function calcularTiempo(){
    const g = 9.81;
    return Math.sqrt((2*(nivelAgua-alturaAbertura))/(g));
  }

  function calcularDistancia(){
    return (calcularVelocidad()*calcularTiempo());
  }

  function calcularCaudal(){
    return (calcularAreaAbertura()*calcularVelocidad() * 1000);
  }

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
            <Form.Control id='nivelAbertura' type="number" size='sm' className='text-center' value={alturaAbertura}
              onChange={changeAlturaAbertura}
            />
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
            <Form.Control id='nivelAgua' type="number" size='sm' className='text-center' value={nivelAgua} onChange={changeNivelAgua}/>
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
            <Form.Control type="number" step={0.001} size='sm' className='text-center' value={diametroAbertura} onChange={changeDiametroAbertura}/>
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
            <Form.Control type="number" size='sm' className='text-center' readOnly value={calcularVelocidad()}/>
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
            <Form.Control type="number" size='sm' className='text-center' readOnly value={calcularPresionInterna()}/>
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
            <Form.Control type="number" size='sm' className='text-center' readOnly value={calcularAreaAbertura()}/>
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
            <Form.Control id='tiempo' type="number" size='sm' className='text-center' readOnly value={calcularTiempo()}/>
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
            <Form.Control type="number" size='sm' className='text-center' readOnly value={calcularDistancia()}/>
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
            <Form.Control type="number" size='sm' className='text-center' readOnly value={calcularCaudal()}/>
            <Button size={'sm'} disabled variant='success'>lts/s</Button>
          </InputGroup>
        </Form>
      </section>

      &nbsp;

    </Container>
  )

}

export {
  calcularVelocidad,
  Calculos
}