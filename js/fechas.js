'use strict';


function reloj(){
    var fechahora = new Date(); //instanciamos la clase date (objeto)
    //funciones
    var horas = fechahora.getHours();
    var minutos = fechahora.getMinutes();
    var segundos = fechahora.getSeconds();

    if(horas < 10){
        horas = '0' + horas;
    }
    if(minutos < 10){
        minutos = '0' + minutos;
    }
    if(segundos < 10){
        segundos = '0' + segundos;
    }

    document.getElementById('tiempo').innerHTML = horas+':'+minutos+':'+segundos;

}

window.onload = function(){
    setInterval(reloj,1000);
}