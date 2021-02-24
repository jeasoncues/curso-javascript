'use strict';

function NombreFuncion(){
   //devolver un valor
   return 'Hola soy el valor retornado';
}

function MostrarMensaje(){
  
    for(var i=0; i < 2; i++){
        console.log('Hola que tal soy Jeason programador Frontend '+ i);
    }
}

//ejecutando la funcion
MostrarMensaje();


/* Practicando */
// Ejercicio 1:
var n1 = 3;
var n2 = 4;

function Suma(n1,n2){
    var resultado = n1 + n2;
    return resultado;
}

var SumaConsola =  Suma(n1,n2);
console.log('La suma es '+SumaConsola);


//Ejercicio 2:
var numeros = 20;

function MostrarMenores(numeros){
   
    for(var i=1; i < numeros; i++){
        var resultado =  numeros - i;
        return resultado;
    }
  
}

console.log(MostrarMenores(numeros));
  
 





