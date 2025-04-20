class EntregasView {
    constructor(map) {
      this.map = map;
      this.pontoEntregador = null;
    }
  
    initEntregador(initialCoordinates) {
      if (this.map) {
        this.pontoEntregador = new tt.Marker().setLngLat(initialCoordinates).addTo(this.map);
      }
    }
  
    updateEntregadorLocation(coordinates) {
      if (this.pontoEntregador && coordinates) {
        this.pontoEntregador.setLngLat(coordinates);
        this.map.setCenter(coordinates); // Opcional: centralizar o mapa no entregador
      }
    }
  }
  
  export default EntregasView;