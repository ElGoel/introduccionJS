'use strict';

const metodoPago = 'nada';

switch (metodoPago) {
    case "Tarjeta":
        console.log('Pagaste con tarjeta');
        break;
    case "Cheque":
        console.log('Pagaste con Cheque');
        break;
    case "Efectivo":
        console.log('Pagaste con Efectivo');
        break;
    default:
        console.log('Aun no haz pagado')
        break;
}
