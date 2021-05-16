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

// ForEach

const arreglo1 = carrito.forEach( producto => console.log(producto.nombre));

// map

const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);

// map da la polibilidad de crear nuevos arreglos pero no muestra nada en consola
// forEach muestra o iterar todos los elementos de un arreglo en consola