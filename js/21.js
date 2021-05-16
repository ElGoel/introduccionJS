'use strict';

// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);


sumar2(5, 10);

const aprendiendo = tegnologia => {
    console.log(`Aprendiendo ${tegnologia}`);
}

aprendiendo('JavaScript');



// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach

meses.forEach( mes => {
    if(mes === 'Marzo') {
        console.log('Marzo si existe')
    }
});

let resultado

// se logra la sintaxis anterior con el Arrow Functions =>
//resultado = carrito.some(producto => producto.nombre === 'Celular');


// cuando se tienen dos parametros en la funcion, si se necesitan los parentesis
//resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

// Filter lee los elementos que uno desee
resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);


