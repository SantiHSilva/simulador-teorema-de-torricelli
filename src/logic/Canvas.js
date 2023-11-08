import cilindro from "./cilindro.svg";
import {calcularVelocidad} from "../components/Calculos.jsx";

let proceso;

function main(){
  const canvas = document.getElementById('canvas');

  // reiniciar canvas
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // clear all intervals
  clearInterval(proceso)
  

  // hacer el canvas de tamaño completo
  const reduce = 20;
  canvas.width = window.innerWidth - reduce;
  canvas.height = window.innerHeight - reduce;

  // Constantes
  const w = canvas.width;
  const h = canvas.height;
  const gravedad = 9.81;

  // Valores iniciales requeridos
  const velocidad = calcularVelocidad();
  const altura_maxima = 300;
  const altura_minima = 100;
  const dt = 0.05; // intervalo de tiempo

  // suelo
  ctx.fillStyle = '#282c33';
  const hSuelo = h - altura_minima;
  ctx.fillRect(0, hSuelo, w, altura_minima);

  // Dibujar la trayectoria del proyectil
  ctx.fillStyle = '#6db1ff';
  let x = 0;
  let y = altura_maxima;

  // Dibujar cilindro SVG
  const img = new Image();
  img.src = cilindro;
  img.onload = function(){
    const x = 50;
    const y =  h - (altura_minima*2) - 200;
    const width = 213; // 426
    const height = 335; // 671
    ctx.drawImage(img, x, y, width, height);
  }


  proceso = setInterval(() => {

    function draw(x,y){
      ctx.beginPath();
      ctx.arc(x + 262, h - y, 5, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }

    // Dibujar el proyectil
    draw(x,y);

    // Actualizar la posición del proyectil
    x += velocidad * dt;
    y = altura_maxima - (0.5 * gravedad * Math.pow((x / velocidad), 2));

    if (y <= altura_minima) {
      clearInterval(proceso);
    }
  }, dt );
}



export{
  main
}