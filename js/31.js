const boton = document.querySelector('#boton');

boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es :', resultado))
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/Ángelo Colmenares.png',
        body: 'Imagen de Angelo todo hermoso'
    })
}