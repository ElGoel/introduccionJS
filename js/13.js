// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

// Acceder a los valores de un arreglo
//console.log(numeros[4]);
//console.log(numeros[2]);
//console.log(numeros[200]);

// Conocer la extension de un arreglo
//console.log(meses.length);

//numeros.forEach( function(numero){
//    console.log(numero)
//})

// Estructura de Datos
numeros.push(60,70,80); // Agrega elementos al final del arreglo
numeros.unshift(-10,-20,-30) // Agrega elementos al inicio del arreglo

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//meses.pop(); //elimina el ultimo elemento
//meses.shift(); //elimina el primer elemento

//meses.splice(2, 1);

//console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'junio']; //si se quiere agregar al inicio se escribiria primero el elemento
console.table(nuevoArreglo);

