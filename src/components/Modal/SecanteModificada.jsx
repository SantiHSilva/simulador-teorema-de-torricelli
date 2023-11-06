import {Col} from "react-bootstrap";
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function SecanteModificada(){
  const expresionSecanteModificada = 'f(h_2) = \\sqrt{2 * g * (h_2 - h_1) }-100m/s';
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

      <img src="https://cdn.discordapp.com/attachments/1115448661602742316/1170229001730666506/396273447_1351911115454212_860745977931491377_n.png?ex=655847af&is=6545d2af&hm=1f1caf040db5f8339b07a6e8e841c512f005138825b0d9eedcde1a0d0948b36d&" />

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