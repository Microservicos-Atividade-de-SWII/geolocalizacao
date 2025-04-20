import EntregasController from './controller/entregasController.js';

const apiKey = 'tl9o9OWNAGSOewQ1PHhdFGWRctiMrwDa';

var map = tt.map({
  key: "tl9o9OWNAGSOewQ1PHhdFGWRctiMrwDa",
  container: "mapa",
  zoom: 15
})

      const entregasController = new EntregasController(map);
      entregasController.startSimulation();




      
      function startTimer(duration, display) {

        var timer = duration, minutes, seconds;
        


         setInterval(function () {
        
         minutes = parseInt(timer / 60, 10)
        
         seconds = parseInt(timer % 60, 10);

 minutes = minutes < 10 ? "0" + minutes : minutes;

      seconds = seconds < 10 ? "0" + seconds : seconds;

         display.textContent = minutes + ":" + seconds;

         if (--timer < 0) { timer = 0;} }, 1000);}

        window.onload = function () {
        
         var time = 60 / 2, 
        
         display = document.querySelector('#safeTimerDisplay');
        
         startTimer(time, display);
        
        };