'use strict';

//ventana para ingresar datos
var n1 = prompt('Ingresar una palabra', 'no has escrito nada');
var n2 = prompt('Ingresar otra palabra', 'no has escrito nada');

function UnirPalabras(n1,n2){
    var palabras_unidas = n1 + ' ' + n2;
    return palabras_unidas;
}

//mostrar la funcion como alerta
//alert(UnirPalabras(n1,n2));

var resultado = UnirPalabras(n1,n2);
console.log(resultado);



