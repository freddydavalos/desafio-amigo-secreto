let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("nombreAmigo").value;
    if (nombre === "") {
        alert("Por favor escribe un nombre");
    } else {
        amigos.push(nombre);
        document.getElementById("nombreAmigo").value = "";
        mostrarLista();
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
    } else {
        let numero = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigos[numero];
    }
}


