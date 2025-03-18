var listadoAmigos = [];

//Agregar amigo al listado
function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo');
    let resultado = document.querySelector('#resultado');

    console.log(nombreAmigo);

    if(nombreAmigo.value != '' && nombreAmigo.value != null){
        listadoAmigos.push(nombreAmigo.value);
        nombreAmigo.value = '';
    }else{
        alert('El nombre esta vacio o es invalido.')
    }

    let amigosHTML = '';
    for(let i = 0; i < listadoAmigos.length; i++){
         amigosHTML += listadoAmigos[i] + '<br>';
    }
    resultado.innerHTML = amigosHTML;
}