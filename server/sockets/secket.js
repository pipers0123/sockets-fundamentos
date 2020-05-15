const {io} = require('../server')

io.on('connection', (client)=>{
	console.log('Usuiario Conectado')

	client.emit('enviarMensaje', {
		Usuario: 'Administrador',
		msn: 'Bienvenido al chat'
	})

	client.on('disconnect', ()=>{
		console.log('Usuario desconectado')
	})

	//Escuchar el cliente
	client.on('enviarMensaje', (data, callback)=>{
		console.log(data)

		client.broadcast.emit('enviarMensaje', data)

		// console.log(mensaje)
		// if (mensaje.Usuario) {
		// 	callback({
		// 		resp: 'TODO SALIO BIEN'
		// 	})
		// }else {
		// 	callback({
		// 		resp: 'TODO SALIO MAL!"""""""""""""'
		// 	})
		// }
	})

})
