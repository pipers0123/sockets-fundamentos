var socket = io()
//ON--- para escuchar info
socket.on('connect', function(){
	console.log('Conectado al servidor')
})

socket.on('disconnect', function(){
	console.log('Perdimos coneccion con el servidor')
})

///EMIT--- para enviar info
socket.emit('enviarMensaje', {
	Usuario: 'Felipe',
	msn: 'Hola Mundo'
}, function (resp) {
	console.log('Respues::::::::', resp)
})

//Escuchar información
socket.on('enviarMensaje', function(data){
	console.log('Servidro', data)
})