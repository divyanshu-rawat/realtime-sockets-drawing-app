
import openSocket from 'socket.io-client';
const socket = openSocket("http://0.0.0.0:8003");

function subscribeToTimer(cb){
	socket.on('drawing', cb);
	socket.emit('subscribeToDrawings')
}

function createDrawings(name){
	socket.emit('createDrawing', { name })
}

export { createDrawings, subscribeToDrawings };