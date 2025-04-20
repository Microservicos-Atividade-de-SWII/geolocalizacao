const pontosRota = [
    [-46.4000, -23.4500], // Ponto de partida (Cajamar)
    [-46.9050, -23.4450],
    [-46.9100, -23.4500],
    [-46.9150, -23.4550],
    [-46.9200, -23.4400],
    [-46.9400, -23.4350], // Perto do ponto de entrega 
    [-46.5534, -23.4489]   // Ponto de entrega 
  ];
  
  const deliveryId = 'entregador_teste_01'; 
  let rotaAtual = 0;
  
  function getNextRoutePoint() {
    if (rotaAtual < pontosRota.length) {
      const nextPoint = pontosRota[rotaAtual];
      rotaAtual++;
      return nextPoint;
    }
    return null;
  }
  
  function resetRoute() {
    rotaAtual = 0;
  }
  
  export { getNextRoutePoint, deliveryId, resetRoute };