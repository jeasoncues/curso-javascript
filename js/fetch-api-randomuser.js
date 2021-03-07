var contenido = document.querySelector('#contenido');


function traer(){
    fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(data => {
        //obtenemos con resultado acedemos a los usuarios
         console.log(data.results[0]);
         contenido.innerHTML = `
          
         <img src="${data.results['0'].picture.large}" alt="" width="100px" class="img-fluid rounded-circle"> 
          <p>Name: ${data.results['0'].name.first}</p>
          <p>Gender: ${data.results['0'].gender}</p>
          <p>Title: ${data.results['0'].name.title}</p>
          <p>City: ${data.results['0'].location.city}</p>
          <p>Email: ${data.results['0'].email}</p>
          <p>Phone: ${data.results['0'].phone}</p>
     
           
         `
    })
}