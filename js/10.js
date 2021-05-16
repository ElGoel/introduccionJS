// objetos
const producto = {
    nombreProducto : 'Monitor 20 Pulgadas',
    precio : 300,
    disponible : true
}

// Forma Anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Distructuring: nueva forma de extraer variables de un objeto
const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
