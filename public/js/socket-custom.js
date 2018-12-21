/**
 * 
 */
var socket = io();

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

// On: Para escuchar información
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


// Emit: Para Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});


// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

});