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

function sortearAmigo() {
    let resultado = document.querySelector('#resultado');

    if (listadoAmigos.length > 0) {
        let randomIndex = Math.floor(Math.random() * listadoAmigos.length);
        let amigoSorteado = listadoAmigos[randomIndex];
        resultado.innerHTML = 'El amigo sorteado es: ' + amigoSorteado;
    } else {
        resultado.innerHTML = 'No hay amigos en la lista para sortear.';
    }
}