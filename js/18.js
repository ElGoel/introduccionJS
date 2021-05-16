'use strict';

function sumar(numero1 = 0, numero2 = 0) { // numero1, 2 son parametros dentro de la función
    console.log(numero1 + numero2);                        // los numeros pueden tener parametros por Defaul
}                                                          // en caso de que no se cumplan las reglas de la función

sumar(10, 10); // aqui son los argumentos o los valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1, );


const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 10);
