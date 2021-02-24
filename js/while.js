'use strict';

//mientras que se cumpla la condicion, nos da true el bucle se sigue ejecutando

var dato = 6;

while(dato < 7){
    console.log('el dato es '+dato);
    dato ++; //incremeta y cuadno se cumple la condicion sale del bucle.
}

console.log('ya se cumplio la condicion');




//mostrar los numeros del 1 al 10 en orden creciente y decreciente.
var numero = 1;

while(numero < 11){
    console.log( numero + ' - ' + (11-numero));
    numero ++;
}



//

var nota = 18;

while(nota < 20){
    console.log('pasaste el curso de javascript con ' + nota);
    nota++;
}