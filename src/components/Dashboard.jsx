import {Button, ButtonGroup, Container} from "react-bootstrap";
import {IconInfoCircle, IconTable} from "@tabler/icons-react";
import {useEffect} from "react";

export default function Dashboard(){

  useEffect(() => {
    function move(){
      const dashboard = document.getElementById('Dashboard');
      const canvas = document.getElementById('canvas');
      // hacer el canvas de tamaño completo
      const reduce = 50;
      canvas.width = window.innerWidth - reduce;
      canvas.height = window.innerHeight - reduce;
      // Mover el container hacia la esquina superior izquierda del canvas
      dashboard.style.top = reduce + 'px';
      dashboard.style.left = reduce + 'px';
    }

    move();
    window.addEventListener('resize', move);

  }, []);

  return(
    <Container
      id={'Dashboard'}
      style={{
        padding: '0px',
        backgroundColor: '#ffffff',
        position: 'absolute',
        border: '1px solid black',
        width: '25%',
      }}
    >
      <p
        className='text-center border rounded-bottom'
      >
        Simulación del Teorema de Torricelli
      </p>

      <section
        className='d-flex justify-content-center'
      >
        <ButtonGroup>
          <Button
            variant={'none'}
            className={'text-black btninfo'}
          >
            <IconInfoCircle size={20} /> &nbsp;
            Información
          </Button>
          <Button
            variant={'none'}
            className={'text-black btnaprox'}
          >
            Aprox. de datos
            &nbsp;<IconTable size={20} />
          </Button>
        </ButtonGroup>
      </section>

      &nbsp;
    </Container>
  )
}