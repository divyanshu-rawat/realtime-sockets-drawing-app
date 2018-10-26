
import openSocket from 'socket.io-client';
const socket = openSocket("http://0.0.0.0:8003");

function subscribeToDrawings(cb){
	socket.on('drawing', cb);
	socket.emit('subscribeToDrawings')
}

function createDrawings(name){
	socket.emit('createDrawing', { name })
}

function publishLine(drawingID, line){
	socket.emit('publishLine',{drawingID, ...line})
}

function subscribeToDrawingsLines(drawingID, cb){

	socket.on(`drawingLine: ${drawingID}`, cb)
	socket.emit('subscribeToDrawingsLines', drawingID);
}

export { createDrawings, subscribeToDrawings, publishLine, subscribeToDrawingsLines };