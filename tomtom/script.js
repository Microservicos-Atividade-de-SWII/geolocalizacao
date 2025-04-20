const apiKey = 'tl9o9OWNAGSOewQ1PHhdFGWRctiMrwDa';
const deliveryId = 'entregador_teste_01'; // Um ID de teste


let map;
let pontoEntregador;
let pontosRota = [
  [-46.4000, -23.4500], // Ponto de partida (ex: um restaurante)
  [-46.9050, -23.4450],
  [-46.9100, -23.4500],
  [-46.9150, -23.4550],
  [-46.9200, -23.4400],
  [-46.9400, -23.4350], // Perto do ponto de entrega (exemplo)
  [-46.5534, -23.4489]  // Ponto de entrega (Jandira - exemplo)
];
let rotaAtual = 0;

function initMap(initialCoordinates) {
  map = tt.map({
    key: apiKey,
    container: 'mapa',
    center: initialCoordinates || [-46.9000, -23.4500],
    zoom: 15
  });

  pontoEntregador = new tt.Marker().setLngLat(initialCoordinates || pontosRota[0]).addTo(map);
}

     function simularEntrega() {
  if (rotaAtual < pontosRota.length) {
    const nextPoint = pontosRota[rotaAtual];
    pontoEntregador.setLngLat(nextPoint);
    map.setCenter(nextPoint); // Opcional: centralizar o mapa no entregador
    rotaAtual++;
  } else {
    console.log("Entrega simulada concluída!");
    clearInterval(intervalId); // Para a simulação quando chegar ao fim da rota
  }
}

// Inicializa o mapa com o primeiro ponto da rota
    initMap(pontosRota[0]);

// Inicia a simulação de movimento a cada 2 segundos (ajuste o tempo conforme necessário)
 const intervalId = setInterval(simularEntrega, 5000);

 function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = 0;
          // timer = duration; // uncomment this line to reset timer automatically after reaching 0
      }
  }, 1000);
}

window.onload = function () {
  var time = 60 / 2, // your time in seconds here
      display = document.querySelector('#safeTimerDisplay');
  startTimer(time, display);
};

