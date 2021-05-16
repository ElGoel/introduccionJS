// Promise

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); //El Promise se cumple
    }else {
        reject('No se pudo iniciar sesion'); // El promise no se Cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado)) //este paso es importante luego de realizar un Promise
    .catch( error => console.log(error))

// en los promises existen 3 valores:
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir