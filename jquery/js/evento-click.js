'use strict';


$(document).ready(function (){
    
   //Evento Click
   $('#btnmostrar').click(function(){
      $('#btnmostrar').css('background-color','green');
      $('#texto').html('Hola perros');
         //lo muestra 
         $('#texto').show(1000);
      $('#btnocultar').css('background-color','white');
   });

   //Evento para ocultar con hide.
   $('#btnocultar').click(function(){
       $('#btnmostrar').css('background-color','white');
       $('#btnocultar').css('background-color','red');
       //ocultar el texto por 1 segundo
       $('#texto').hide(1000);
    
   });

});