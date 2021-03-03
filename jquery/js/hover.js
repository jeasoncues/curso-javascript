'use strict';


$(document).ready(function(){
    $('#btn').html('Pasa el mouse');

    $('#btn').hover(function(){
        $('#btn').html('Saca el mouse');
        $('#texto').show(1000);
    }, function(){
        $('#btn').html('Pasa el mouse');
        $('#texto').hide(1000);

    })
})