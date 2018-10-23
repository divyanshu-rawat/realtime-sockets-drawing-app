
import openSocket from 'socket.io-client';
const socket = openSocket("http://0.0.0.0:8002");

function subscribeToTimer(cb){
	socket.on('timer', (timeStamp) => cb(timeStamp));
	socket.emit('subscribeToTimer',1000)
}

export { subscribeToTimer };