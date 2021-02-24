'use strict';

//alertas dentro del navegador
alert('Mensaje de alerta');


//ventana de confirmacion (acepta o cancelar)
var result = confirm('Cuidado se lagea la pc');
alert(result);


//ventana de ingreso de datos
var res = prompt('Enserio quieres lagear la pc ?', 'Si');
alert('Has dicho que ' +res);
console.log(res);