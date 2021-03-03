'use strict';


//iniciando el documento cargado
$(document).ready(function (){
   
//    codigo sin Jquery solo javascript puro
//    var parrafo =  document.getElementsByClassName('parrafo');
//    console.log(parrafo);



   //Codigo con Jquery

   //imprimiendo en consola con jquery
   var parrafo = $('.parrafo');
   console.log($('.parrafo'));
   
   //cambiando el texto del parrafo
     parrafo.html('Perros');
   //$('.parrafo').html('Hola');



   //selector de etiqueta
   var span = $('span');
   span.css('border', '1px solid blue');
   //imprimiendo la variable span 
   console.log(span.text());

//Selectores de atributos
  /* las comillas van para decirles que es un string y adjunta a todos los title ya que puede tener muchos valores title */

  var atributo = $('[title = "google"]');
  atributo.css('font-size', '50px');
  console.log(atributo.text());
   

})