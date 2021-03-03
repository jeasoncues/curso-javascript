'use strict';



$(document).ready(function(){
 
    $('.parrafo').hover(function(){
        //this => parrafo (es lo mismo hacemos el llamado al parrafo)
          $(this).addClass('borde');
    }, function(){
        $(this).removeClass('borde');

    })
})