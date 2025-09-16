// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// este array almacena los nombres de los participantes


const amigosEscogidos = []; // esto va a almacenar a los amigos que ya fueron escogidos 
const amigos = []; // array de participantes que seran cargados desde el formulario

function agregarAmigo() {
    const input = document.getElementById("amigo"); // obtenemos el input dónde el usuario escribe el nombre


    // obtiene el texto ingresado y elimina espacios en blanco al inicio y al final y deja el texto en minúsculas
const nombre = input.value.trim().toLowerCase(); 

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido y no dejes en vacio.");
        return;
    }
    // Expresión regular que valida que el nombre solo contenga letras y espacios
const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/; 

        // Si el texto no cumple con la validación, muestra alerta y termina la función
            if (!regexNombre.test(nombre)) {
                alert("El nombre solo puede contener letras");
                return;
            }

    // Verifica si el nombre ya está en la lista para evitar duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue ingresado.\n  si tu amigo se llama igual al  que ya ingresaste\n  puedes agregar la letra de su apellido  junto al nombre para diferenciarlos");
        return;
    }

amigos.push(nombre); // agrega el nombre al array de amigos
input.value = ""; // limpia el input para que el usuario pueda ingresar otro nombre

mostrarLista(); // llama a la función que muestra la lista actualizada



}



function mostrarLista() {
    const lista = document.getElementById("listaAmigos"); // obtiene el elemento ul donde se mostrará la lista
    lista.innerHTML = ""; // limpia la lista antes de mostrarla nuevamente


// Recorre el arreglo 'amigos' para mostrar cada nombre
    amigos.forEach((amigo, index) => {
        // Crea un nuevo elemento <li> para cada amigo
        const item = document.createElement("li");

        // Establece el texto del <li>, con número y nombre
        item.textContent = `${index + 1}. ${amigo}`;

        // Inserta el <li> dentro del <ul>
        lista.appendChild(item);
    });




}



function sortearAmigo() {
    // Obtiene el contenedor UL donde se mostrará el resultado del sorteo
    const resultado = document.getElementById("resultado");

    // Limpia el contenido anterior para mostrar solo el nuevo resultado
    resultado.innerHTML = "";
  // deben haber minimo dos amigos 
if (amigos.length < 2) {
    resultado.textContent = "Debes agregar al menos dos amigos para hacer el sorteo.";
    return;
}
    // Si no hay amigos agregados, muestra mensaje y detiene la función
    if (amigos.length === 0) {
        resultado.textContent = "No hay amigos para sortear.";
      
        return;
    }

    // Filtra los amigos que aún no han sido sorteados
    // El método filter() crea un nuevo arreglo solo con los amigos que NO están en 'amigosEscogidos'
    const amigosDisponibles = amigos.filter(amigo => !amigosEscogidos.includes(amigo));

    // Si no quedan amigos disponibles para sortear, significa que ya todos fueron sorteados
    if (amigosDisponibles.length === 0) {
        resultado.textContent = "Ya se han sorteado todos los amigos.";
        return;
    }


    const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);

    // Obtiene el nombre del amigo que corresponde al índice aleatorio
    const amigoSeleccionado = amigosDisponibles[indiceAleatorio];

    // Agrega el amigo seleccionado al arreglo 'amigosEscogidos' para no repetirlo en futuros sorteos
    amigosEscogidos.push(amigoSeleccionado);

    // Crea un nuevo elemento <li> para mostrar el resultado del sorteo
    const li = document.createElement("li");

    // Asigna el texto que indica quién fue el amigo secreto sorteado
    li.textContent = `El amigo secreto es: ${amigoSeleccionado}`;

    // Inserta el <li> dentro del contenedor de resultados para que se muestre en la web
    resultado.appendChild(li);
   mostrarLista();
}








// funcion reinica el juego 
function reiniciarJuego() {

    amigos.length = 0;
    amigosEscogidos.length = 0;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// funcion reinica el juego 
function reiniciarJuego() {

    amigos.length = 0;
    amigosEscogidos.length = 0;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}


