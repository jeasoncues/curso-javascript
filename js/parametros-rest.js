'use strict';


//Parametros Rest

function ListadoPaises(p1,p2, ...p){
    console.log(p1);
    console.log(p2);
    console.log(p);
}

ListadoPaises('España','Peru','Suecia','Argentina','Chile');