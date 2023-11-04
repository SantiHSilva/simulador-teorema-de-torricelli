const canvas = document.getElementById('canvas');

// hacer el canvas de tamaño completo
const reduce = 20;
canvas.width = window.innerWidth - reduce;
canvas.height = window.innerHeight - reduce;

// Constantes
const w = canvas.width;
const h = canvas.height;
const gravedad = 9.80665;

// Valores iniciales requeridos
const velocidad = 10;
const altura_maxima = 400;
const altura_minima = 100;
const dt = 0.05; // intervalo de tiempo

// Calculos de movimiento semi parabolico
const tiempo = Math.sqrt((2 * altura_maxima) / gravedad);
const distancia = velocidad * tiempo;

// Dibujar el suelo
const ctx = canvas.getContext('2d');

// suelo
ctx.fillStyle = 'green';
const hSuelo = h - altura_minima;
const wSuelo = w;
ctx.fillRect(0, hSuelo, wSuelo, altura_minima);

// Dibujar la trayectoria del proyectil
ctx.fillStyle = 'blue';
let x = 0;
let y = altura_maxima;

const drawProjectile = setInterval(() => {

    function draw(x,y){
        ctx.beginPath();
        ctx.arc(x, h - y, 5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }

// Dibujar el proyectil
    draw(x,y);

  // Actualizar la posición del proyectil
  x += velocidad * dt;
  y = altura_maxima - (0.5 * gravedad * Math.pow((x / velocidad), 2));

  console.log(x,y)
  if (y <= altura_minima) {
    console.log('Detener animación')
    clearInterval(drawProjectile);
  } else {
    console.log('Continuar animación')
  }
}, dt );