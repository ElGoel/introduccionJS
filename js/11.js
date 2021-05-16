// 'use strict'; = ejecuta el javascript con reglas estrictas
// objetos
const producto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio : 300,
    disponible : true
}

Object.seal(producto); // no deja eliminar o agregar nuevas propiedades pero si modificar los existentes
                       // Freeze no deja eliminar, agregar o modificar el objeto
producto.precio = 'NUEVO PRECIO';

console.log(Object.isSealed(producto))


console.log(producto);
