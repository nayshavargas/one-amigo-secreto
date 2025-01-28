// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo.trim() === ""){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(amigo);
        limpiarInput();
        mostrarAmigos();
    }
};

function limpiarInput(){
    document.getElementById('amigo').value = "";
};

function mostrarAmigos(){
    limpiarContenido('listaAmigos');
    for(i=0;i<amigos.length;i++){
        crearElemento(document.getElementById('listaAmigos'),amigos[i]);
    }
};

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    if(amigos.length != 0){
        let indice = Math.floor(Math.random()*amigos.length);
        let amigo = amigos[indice];
        limpiarContenido('listaAmigos');
        crearElemento(resultado,`El amigo secreto sorteado es: ${amigo}`);
        amigos = [];
    }else{
        limpiarContenido('resultado');
        alert('Por favor, inserte un nombre.');
    }
};

function crearElemento(elemento,valor){
    let li = document.createElement('li');
    li.append(document.createTextNode(valor));
    elemento.appendChild(li);
};

function limpiarContenido(elementoId){
    let elemento = document.getElementById(elementoId);
    if (elemento) {
        elemento.innerHTML = "";
    }
}