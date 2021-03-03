'use strict';

// comprobar soporte

if(typeof (Storage)){
    console.log('disponible');
}else{
    console.log('no disponible');
}


//enviar datos al localstorage
localStorage.setItem('clave','valor de la clave');
localStorage.setItem('edad','22');

//obtener valor del item clave
var valor =  localStorage.getItem('clave');
console.log(valor);

//creamos un json
var persona = {
   edad:37,
   nombre:'Jeason',
   apellido:'Cueva'
}
//parseamos a texto el json con stringify
localStorage.setItem('persona', JSON.stringify(persona));


//obtener por la clave persona el json
var per = JSON.parse(localStorage.getItem('persona'));
console.log(per.nombre);