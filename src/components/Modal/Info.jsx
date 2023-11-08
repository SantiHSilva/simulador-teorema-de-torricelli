import {Button, Modal} from "react-bootstrap";
import { InlineMath } from 'react-katex';

// eslint-disable-next-line react/prop-types
export default function Info({showModal, setShowModal}){

  const url = window.location.href;
  const handleClose = () => setShowModal(false);

  return(
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Manual de Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <h5 className='text-center'>
          Introducción
        </h5>

        <p>
          El aplicativo web del Simulador de Fluidos es una herramienta virtual desarrollada con el objetivo de permitir a estudiantes y profesionales simular y estudiar el comportamiento de los fluidos mediante el uso del Teorema de Torricelli, la regresión y el método de la secante. Este manual tiene como finalidad proporcionar una guía detallada sobre el funcionamiento y herramientas propias del aplicativo, para brindar así mismo una mejor experiencia al usuario durante su estadía en el simulador de fluidos web.
        </p>

        <h5 className='text-center'>
          Acceso al aplicativo
        </h5>

        <p>
          Para acceder al aplicativo web del Simulador de Fluidos, es necesario contar con una conexión a internet estable y un navegador web actualizado.
          Ingrese la siguiente URL en la barra de direcciones del navegador:
        </p>
        <section className='text-center'>
          <a href={url}>{url}</a>
        </section>

        <br/>
        <h5 className='text-center'>
          Configuración de parámetros
        </h5>


        <p>
          Antes de realizar una simulación, es necesario configurar los parámetros del problema, para ello, los parámetros incluyen el área de la abertura, la altura del fluido y otros valores relevantes. Por consiguiente, en el área de configuración de parámetros, se proporcionan campos de entrada para especificar los valores de cuyos parámetros, los cuales permitirán que los usuarios tengan la capacidad de manipular debidamente el comportamiento del fluido aplicando el teorema de Torricelli. El apartado de configuración de valores, la encontraras en la parte superior derecha del aplicativo web, tal y como lo señala el círculo rojo en la siguiente imagen:
          <img
            className={'img-fluid'}
            src="https://cdn.discordapp.com/attachments/1032094546173104148/1171847923273846945/image.png?ex=655e2b6c&is=654bb66c&hm=377f6148f7aa916e88dd844a2fdb65079e8ebc83b8bf38aa779f1c62330f3711&" alt="Apartado de donde se deben ingresar los datos"/>
          Asegúrese de proporcionar valores adecuados y coherentes para obtener los resultados deseados y precisos, además tenga en cuenta las siguientes recomendaciones:
          <ul>
            <li>
              El valor del nivel del agua no puede ser menor al de la altura de la abertura por donde saldrá el fluido, de no ser así, no se evidenciaría el registro del comportamiento del fluido, puesto que el nivel del fluido (en este caso agua) seria bajo y no tendría salida por dicha abertura, obteniendo como conclusión que el valor del parámetro <b>“Nivel del agua”</b> debe ser mayor al parámetro <b>“Altura abertura</b>”.
            </li>
            <li>
              Asegúrate de optar por un valor coherente en el parámetro <b>“Diámetro de Abertura”</b>, para permitir una experiencia aplicada a lo más realista con base al estudio que deseas realizar.
            </li>
            <li>
              Recuerda que todos los parámetros o variables configurables (Altura de abertura, Nivel de agua, Diámetro de abertura), están en la unidad de medida <b>metros (m)</b>, por lo tanto, asegúrate de realizar la conversión en cuyos casos donde se tenga el valor de estos en alguna u otra unidad de medida diferente a <b>metro (m)</b>.
            </li>
            <li>
              Por último, asegúrate de que los valores de dichas variables modificables sean las correctas para evitar confusiones o cálculos erróneos en el futuro.
            </li>
          </ul>
        </p>

        <h5 className='text-center'>
          Realización de la simulación
        </h5>

        <p>
          El aplicativo realizará los cálculos necesarios utilizando el Teorema de Torricelli, junto con ello la aplicación de métodos numéricos como los son: la regresión y el método de la secante para determinar la velocidad de salida del fluido.
        </p>

        <p>
          Los resultados de la simulación se mostrarán en el área de visualización de “Datos Calculados”, donde se podrán observar los valores calculados, conforme al comportamiento de los parámetros ya establecidos previamente.
        </p>



        <h5 className='text-center'>
          Apoximaciones de datos
        </h5>

        <p>
          En la sección de Aproximación de Datos, encontrarás toda la información relacionada con la visualización final del procedimiento utilizado para la ejecución de los datos ingresados en el simulador y posteriormente evidenciados en los resultados obtenidos. Además, podrás consultar las tablas que contienen la tabulación de datos realizada mediante dos tipos de métodos numéricos: regresión y método de la secante. Cada tabla se acompaña de una gráfica correspondiente que representa el comportamiento de los resultados obtenidos. A continuación, se muestra un ejemplo de cómo se visualiza la información utilizando la imagen adjunta.
        </p>

        <img
          className='img-fluid'
          src="https://cdn.discordapp.com/attachments/1032094546173104148/1171854263245348905/image.png?ex=655e3154&is=654bbc54&hm=41a74e0cc8a80743b20032443081280672669ec7cafb4d0927058ee13ec2c170&" alt="Tabla de regresión lineal simple con el tiempo."
        />

        <p>
          Debee tener en cuenta que:
          <ul>
            <li>
              Se evidenciarán los resultados obtenidos en dos distintos métodos numéricos los cuales se implementaron para un mejor rendimiento y eficiencia del mismo simulador, es por ello, que dichos métodos van a tener su propio apartado dentro del modal abierto a la hora de consultar en <b>“Aprox. De Datos”</b> ubicado en la parte superior izquierda de su monitor.
            </li>
            <li>
              Encontraras tanto el método de regresión como el de secante de forma dividida en el modal empleado para presentar toda la información correspondiente al apartado de <b>“Aprox. De Datos”</b>, con el objetivo de separar los métodos mencionados, uno del otro.
            </li>
            <li>
              Tenga en cuenta que toda la información anteriormente mencionada, se proporcionara mediante el uso de modales, las cuales son ventanas que se ejecutan sobre segundo plano.
            </li>
          </ul>
        </p>

        <h5 className='text-center'>
          Regresión lineal
        </h5>

        <p>
          El método de regresión lineal es un método estadístico que permite determinar la relación entre dos variables, en este caso, la relación entre el tiempo de caída del chorro y la distancia recorrida por el chorro de agua. Para ello, se utiliza la siguiente fórmula:
        </p>

        <section
          className='text-center'
        >
          <InlineMath math={'\\^{y} = a + bx'} />
        </section>
        <br/>
        <p>
          Donde, a es la ordenada al origen y b es la pendiente de la recta.
          <br/>

          <section
            className='p-2 text-center'
          >
            <InlineMath math={'b = \\frac{\\sum xy - n\\={x}\\={y}}{\\sum (x^2) - n\\={x}^2}'} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <InlineMath math={'a = \\={y} - b\\={x}'} />
          </section>

          <p>
            Donde, <InlineMath math={'\\={x}'} /> y <InlineMath math={'\\={y}'} /> son los promedios de los valores de x e y, respectivamente.
          </p>
        </p>

        <h5 className='text-center'>
          Método de la secante modificada
        </h5>

        <p>
          El método de la secante modificada es un método numérico que permite determinar la raíz de una función, en este caso, la raíz de la ecuación de Torricelli. Para ello, se utiliza la siguiente fórmula:
        </p>

        <section
          className='text-center'
        >
          <InlineMath math={'x_i = x_0 - \\frac{dx_0*f(x_0)}{f(x_0+dx_0)-f(x_0)}'} />
        </section>

        <p>
          Donde, <InlineMath math={'x_i'} /> es el valor de la raíz, <InlineMath math={'x_0'} /> es el valor inicial, <InlineMath math={'dx_0'} /> es el valor de la derivada en el valor inicial, y <InlineMath math={'f(x)'} /> es la función a evaluar.
        </p>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}