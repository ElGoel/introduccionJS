'use strict'

// Estructuras de Control

// const puntaje = 100;
//
// if (puntaje !== 1000) { "!==" significa "NO ES IGUAL"
//     console.log('Si el puntaje es 1000');
// } else {
//     console.log('No es igual');
// }

// const efectivo = 1000;
// const carrito = 800;
//
// if (efectivo > carrito) {
//     console.log('El usuario puede pagar');
// } else {
//     console.log('Fondos Insuficientes');
// }

const rol = 'Contador';

if (rol === 'Administrador') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'Editor') {
    console.log('No tienes acceso completo');
} else {
    console.log('No tienes acceso');
}
