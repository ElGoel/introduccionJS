// This
// El This. llamaria a una funcion que se encuentre dentro de un objeto


const reservacion = {
    nombre: 'Juan',
    apellido: 'Colmenares',
    Total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar ${this.Total}`);
    }// en este caso llamaria al objeto
}

// const reservacion = {
//     nombre: 'Juan',
//     apellido: 'Colmenares',
//     Total: 5000,
//     pagado: false,
//     informacion: () => {
//         console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar ${this.Total}`);
//     }
// } "Este comando llama a la ventana global"

const reservacion2 = {
    nombre: 'Alkizaira',
    apellido: 'Colmenares',
    Total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservo y su cantidad a pagar ${this.Total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();