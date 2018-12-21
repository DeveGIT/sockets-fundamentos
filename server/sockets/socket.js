/**
 * 
 */

const { io } = require('../server');



io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //broadcast envía el mensaje a todo el mundo conectado a nuestro servidor


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!!!'
        //     })
        // }



    });

});