'use strict';

var n1 = prompt('Dime una palabra', 'escribe aquí');
var n2 =  prompt('Dime una palabra', 'escribe aquí');


function UnirPalabras(n1,n2, n3 = false){
     if(n3 == false){
         console.log(n1 + ' ' + n2);
     }else {
        document.write(n1 + ' ' + n2); //muestra en html
     }

}

UnirPalabras(n1,n2, true);