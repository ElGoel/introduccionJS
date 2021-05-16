// Fetch API permite enviar información al servidor u obtener información de un servidor
// tambien permite poder actualizar la pagina en tiempo real sin necesidad de recargar

async function optenerEmpleados() {

    const url = 'empleados.json';

    // fetch(url)
    //     .then(resultado => resultado.json())
    //     .then( datos => {
    //         // console.log(datos.empleados);

    //         const { empleados } = datos;
    //         console.log(empleados);

    //         // empleados.forEach( empleado => {
    //         //     console.log(empleado);

    //         })
    //     })

    const resultado = await fetch(url);
    const datos = await resultado.json();
    console.log(datos);
}
optenerEmpleados();

// JSON = es JavaScript Objet Notation
// todos los lenguajes pueden crear un archivo tipo JSON para leer en JS