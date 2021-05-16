'use strict';
// Return: se encarga de retornar la ejecución y asignarlo a una variable

// function sumar(n1, n2) {
//     return n1 + n2;
// }
//
// const resultado = sumar(2, 3);
//
// console.log(resultado);

// Return basicamente realiza una regla que se podra reutilizar con la ejecución de la función o variable
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar es: $${totalAPagar}`);
