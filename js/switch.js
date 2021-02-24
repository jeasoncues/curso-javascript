var edad = 18;
var texto = '';

switch(edad){
    case 17:
        texto = 'No tiene 18 años';
    break;
    case 18:
        texto = 'Eres mayor de edad';
    break;
    default:
        texto = 'Parece que no tienes edad';
}

//console.log(texto);



/* Practicando ejercicios con switch */
// 1. 
var mes = 2;


switch(mes){
    case 1:
        mes = 'Enero';
    break;

    case 2: 
        mes = 'Febrero';
    break;

    case 3: 
        mes = 'Marzo';
    break;

    default:
        mes = 'No existe';
    
}

//console.log(mes);


// 2.

var motor = 4;

switch(motor){
    case 1:
        motor = 'La bomba es una bomba de agua';
    break;

    case 2: 
        motor = 'La bomba es una bomba de gasolina';
    break;

    case 3:
        motor = 'La bomba es una bomba de hormigon';
    break;

    case 4:
        motor = 'La bomba es una bomba de pasta alimenticia';
    break;

    default:
        motor = 'No existe un valor válido para tipo de bomba';
}

console.log(motor);

