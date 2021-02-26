'use strict';

//funciones anonimas
//multiplicar => funcion anonima

function sumar(n1,n2,multiplicar){
    var sumar = n1 + n2;
    multiplicar(sumar);
    return sumar;
}

sumar(5,7,function(d){
    console.log('La suma es: '+d);
    console.log('La multiplicacion es '+ d * 2);
})