var contenido =  document.querySelector('#contenido');

function traer(){
    fetch('datos.txt')
    .then(data => data.text())
    .then(data =>{
        contenido.innerHTML = `<h2> ${data} </h2>`
    })
} 