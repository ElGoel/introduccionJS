const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo web Completo';
const producto2 = 'Monitor HD';

// length es para la extension
console.log(tweet.length); // metodo para los strigs
console.log(producto2);

// metodo IndexOf para buscar palabras en un strig (Retorna a una posicion)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet')); // -1 significa que no existe la palabra

// Include (retorna True o False)

console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));
