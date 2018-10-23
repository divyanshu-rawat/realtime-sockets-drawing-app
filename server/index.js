const io = require("socket.io")();
r = require('rethinkdb')

function createDrawings(){
	r.table('drawings')
	.insert({
		name,
		timestamp : new Date(),
	})
	.run(connection)
	.then(() => { console.log('created a drawing with name: ', name)})

}


r.connect({host : 'localhost', port: 28015, db: 'realtime'})
.then((connection) => {
	io.on("connection", (client) => {
		// send respond to event to that particular connected client.
		// event Interested is subscribeToTimer that we will emit from react app later.
		client.on("subscribeToTimer", (interval) => {
			console.log('client is subscribing to timer with interval', interval);
			
			r.table('timers')
			.changes()
			.run(connection)
			.then((cursor) => {

				cursor.each((err,timerRow) => {
					client.emit('timer', timerRow.new_val.timestamp);
				})
			})
		})
		// socket.io
		// .on() is used to subscribe events.
		// .emit() is used to publish events. which in this case other end of the socket is client.
	})
})

const port = 8003;
io.listen(port)
console.log('listening on port', port);

// you can use redis for storage and pub/sub 
// you can use kafka/rabbitMQ for pub/sub and mongoDB for storage.
// pub/sub broker rethinkDB.
// rethinkDB live Queries were used when client subscribes to the timer event  emitter via sockets.
// we will be using REQL Query Language for that purpose.