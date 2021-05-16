'use strict'
// Funciones

// Declaración de la Función

function sumar() {
    console.log(10 + 10);
}

sumar() // cuando se declara una función no va a importar el orden del codigo de ejecución, JS lo va a leer en orden

// Expresión de la Función
//sumar2(); <-- ejemplo
const sumar2 = function () {
    console.log(3 + 3);
}

sumar2(); // En este caso marcara un error si el comando 'sumar2()' se encuentra arriba, dado que la función
// se encuentra dentro de una variable, por lo tanto JS leera el codigo desde el llamado de la función y luego
// de la variable


// IIFE: Son utiles para proteger que no se mesclen las
// variables y funciones con otros archivos
//(function () {
//    console.log('esto es una función');
//})();

// JS se ejecuta en dos etapas, eso se le conoce como Hosting, primero se ejecutan las funciónes que es la
// parte del registro y la segunda es la de ejecución en la que se ejecuta el codigo.
