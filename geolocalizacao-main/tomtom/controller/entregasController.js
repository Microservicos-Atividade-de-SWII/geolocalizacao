import * as Model from '../model/entregasModel.js';
import EntregasView from '../view/entregasView.js';

class EntregasController {
  constructor(map) {
    this.view = new EntregasView(map);
    this.intervalId = null;
  }

  startSimulation() {
    const initialPoint = Model.getNextRoutePoint();
    if (initialPoint) {
      this.view.initEntregador(initialPoint);
      this.intervalId = setInterval(() => {
        const nextPoint = Model.getNextRoutePoint();
        if (nextPoint) {
          this.view.updateEntregadorLocation(nextPoint);
        } else {
          console.log("Entrega simulada concluída!");
          clearInterval(this.intervalId);
          Model.resetRoute();
        }
      }, 5000); // Intervalo de 5 segundos
    }
  }
}

export default EntregasController;