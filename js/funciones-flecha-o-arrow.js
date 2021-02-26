'use strict';

// funciones anonimas con funciones flecha


function sumar(n1,n2,multiplicar){
    var suma =  n1 + n2;
    multiplicar(suma);
    return suma;
};

sumar(5,5, d => {
    console.log('La suma es : ' + d );
    console.log('La multiplicacion es: ' + d * 2);
});