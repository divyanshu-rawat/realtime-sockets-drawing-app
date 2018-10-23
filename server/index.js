const io = require("socket.io")();

io.on("connection", (client) => {

	// send respond to event to that particular connected client.
	// event Interested is subscribeToTimer that we will emit from react app later.

	client.on("subscribeToTimer", (interval) => {
		console.log('client is subscribing to timer with interval', interval);
		setInterval(() => client.emit('timer', new Date()), interval)
	})

	


	// socket.io

	// .on() is used to subscribe events.
	// .emit() is used to publish events. which in this case other end of the socket is client.
})

const port = 8002;
io.listen(port)
console.log('listening on port', port);