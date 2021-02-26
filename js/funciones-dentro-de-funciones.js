'use strict';

var n1 =  prompt('escribe','aqui');
var n2 = prompt('escribe','aqui');

function MostrarConsola(n1,n2){
    console.log(n1 + ' ' + n2);
}

function EnDocumentoHtml(n1,n2){
    document.write(n1 + ' ' + n2);
}

function Imprimir(n1,n2,n3 = false){
    if(n3 == false){
        MostrarConsola(n1,n2);
    }else{
        EnDocumentoHtml(n1,n2);
    }
}

Imprimir(n1,n2, true);