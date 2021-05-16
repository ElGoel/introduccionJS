// Aync / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes... espere...');

        setTimeout(() => {
            resolve('Los Clientes fueron Descargados');
        }, 5000)

    })
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos... espere...');

        setTimeout(() => {
            resolve('Los Pedidos fueron Descargados');
        }, 3000)

    })
}

async function app() {
    try {
        // nOTA: en este caso el performance es afectado ya que se ejecuta uno primero que otro 
        // const Clientes = await descargarNuevosClientes()
        // const pedidos = await descargarUltimosPedidos();
        // console.log(Clientes);
        // console.log(pedidos);

        // en este caso el Promise.all ejecuta ambas funciones al mismo tiempo y en el tiempo establecido
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);// esta es la forma de optimisar un Async await NOTA PARA UNA ENTREVISTA
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();

// Async, await funciona de manera que un codigo dependa de otros, unos codigos se ejecutaran de forma normal
// y/o forzada y otros codigos no se ejecutaran hasta que se complete el anterior o el siguiente, todo depende
// nota para mi mismo, entiendez mendez?

// el codigo no requiera ni le interecen los llamados pero abra otro codigo que esperara hasta que ese
// llamado se complete o se hayan descargado por completo de una base de datos para ejecutarse.
