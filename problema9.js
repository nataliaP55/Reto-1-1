/*
   velocidad inicial 0 km/h
   velocidad aceleración 20 km/h

   velocidad final 60 km/h

   tiempo en alcanzar 60 km/h = incognita
    
  */

   var velInicial = 0 // velocidad en km/h
   var velAceleracion = 20 // velocidad en km/h
   var velocidadFinal = 60 // velocidad en km/h

    var tiempoEnAlcanzarSesentaKmHora = velocidadFinal/velAceleracion; 

    document.write(`
      <h3> el tiempo en alcanzar la velocidad final es de: ${tiempoEnAlcanzarSesentaKmHora } </3>
   
`)


   console.log("el tiempo en alcanzar la velocidad final es de: " + tiempoEnAlcanzarSesentaKmHora + " horas")

