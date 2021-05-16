// For Loop

// for ( let i = 0; i < 10; i++ ) {
//     console.log(i);
// }

// for ( let i =0; i < 10; i++ ) {
//     if ( i % 2 === 0 ) {
//         console.log(`El numero es ${i} es Par`)
//     } else {
//         console.log(`El numero es ${i} es impar`)
//     }
// } IMPORTANTE PARA ENTREVISTA DE TRABAJO

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisor 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 700 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 600 },
    { nombre: 'Laptop', precio: 800 }
];

for ( let i = 0; i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}

// While Loop

// let i = 20; // Indice
//
// while (i < 10) {    // Condicion
//
//    console.log('Desde el while loop');
//
//     i++;    // Incremento
// }

// Do While Loop

let i = 0;

do {
    console.log(i);

    i++;
} while ( i < 10 );

//La diferencia entre el Do While y el While, esque el codigo del Do While
//Se ejecutara al menos una vez y luego revisara la condicion si se cumple
//en el While primero se revisa la condicion y luego se ejecuta si se cumple












