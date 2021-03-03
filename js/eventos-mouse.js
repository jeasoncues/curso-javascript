'use strict';

var boton = document.querySelector('#boton');
var div =  document.querySelector('#div');


// Escuchar de eventos para el mouse 
boton.addEventListener('click',function(){
    console.log('diste click');
    //div.innerHTML = 'Hola';
})

function pulsar(){
    div.innerHTML = ` 
                     <br>
                     Diste doble click 
                      `;
}