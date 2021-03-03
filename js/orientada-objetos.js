'use strict';


//modelo o clase persona
function Persona(edad,altura,peso){
  this.edad = edad;
  this.altura = altura;
  this.peso =  peso;

 
  //Metodos o funciones 
  this.caminar = () =>{
      console.log('Esta persona esta caminando');
  }

  this.sentarse = () =>{
     console.log('La persona esta sentada');
  }


  this.calcularedad = (edad) => {
      do{
          console.log('Tu edad es: '+edad+' y eres menor de edad');
          edad ++;
      }while(edad < 18);

  }


  this.obtenerDNI = (edad) =>{
    if(edad < 18) {
        console.log('Menor de edad');
    }else {
        console.log('Mayor de edad');
    }
  }

}

//Objeto instanciado de la clase persona
var Jeason = new Persona(22, 1.70, 70);
var Sebastian = new Persona(15,2.00,80);

console.log(Jeason.caminar());
console.log(Sebastian.sentarse());
console.log(Jeason.obtenerDNI(18));
console.log(Jeason.calcularedad(17))

/*
 * Ejercicios - Practicando  
 */


function Carro(marca,color,precio){

  this.marca =  marca;
  this.color =  color;
  this.precio = color;


  this.manejar = () =>{
      console.log('Manejando este carro');
  }

  this.financiamiento = (precio)=>{
      var cuotas = 20;
      var financiamiento = cuotas * precio;
      console.log(financiamiento);
  }

  this.licencia = (edad) => {
      while(edad > 18){
          console.log('Obtiene licencia');
          edad ++;
      }
  }


  this.entrega = (mes) => {

      switch(mes){
          case 1: 
             mes = 'Enero';
          break;

          case 2: 
             mes = 'Febrero';
          break;

          default: 
              mes = 'No existe';

      }

      console.log('Sera entregado en el '+mes);
  }

}


var Coche = new Carro('Hilux','negro',2000);
console.log(Coche.financiamiento(2000));
console.log(Coche.entrega(1));
// console.log(Coche.licencia(19));