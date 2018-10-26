
import openSocket from 'socket.io-client';
import Rx from 'rxjs/Rx';

// sending up chunked updated to react component so that it can render those instead of rendring on each line draw.
// so basically sending each line to the canvas as props, we are gonno send it through in buffers, giving it time to go apply a buffer of lines together.
// as events from the server as coming as streams, it makes sense to use rx.js


const socket = openSocket("http://0.0.0.0:8003");

function subscribeToDrawings(cb){
	socket.on('drawing',drawing => cb(drawing));
	socket.emit('subscribeToDrawings')
}

function createDrawings(name){
	socket.emit('createDrawing', { name })
}

function publishLine(drawingID, line){
	socket.emit('publishLine',{drawingID, ...line})
}

function subscribeToDrawingsLines(drawingID, cb){
	// batch it up and provide array of lines to enhance performance!
	// Now we need rx observable to represent our data also known as stream.
	// it will represent the events coming through the websockets server.
	// rx has an easy way to do this. 

	const lineStream = Rx.Observable.fromEventPattern(
		h => socket.on(`drawingLine: ${drawingID}`, h),
		h => socket.off(`drawingLine: ${drawingID}`, h)
		// so when everytime an event gets published through this socket channel,
		// it will send it through this observable handle, allowing to use stream operators on it
	)

	const bufferedTimeStream = lineStream
	.bufferTime(100)
	.map(lines => ({ lines }))
	
	bufferedTimeStream.subscribe(linesEvent => cb(linesEvent))
	socket.emit('subscribeToDrawingsLines', drawingID);
}

export { createDrawings, subscribeToDrawings, publishLine, subscribeToDrawingsLines };