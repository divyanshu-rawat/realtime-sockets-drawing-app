const io = require("socket.io")();
r = require('rethinkdb')

function createDrawings({ connection, name }){
	r.table('drawings')
	.insert({
		name,
		timestamp : new Date(),
	})
	.run(connection)
	.then(() => { console.log('created a drawing with name: ', name)})

}

function subscribeToDrawings({ client, connection }){
	r.table('drawings')
	.changes({include_initial : true})
	.run(connection)
	.then((cursor) => {
		cursor.each((err, drawingRow) =>{
			client.emit('drawing', drawingRow.new_val)
		})
	})
}

function subscribeToDrawingsLines({ client, connection, drawingID }){
	r.table('lines')
	.filter(r.row('drawingID').eq(drawingID))
	.changes({include_initial : true})
	.run(connection)
	.then((cursor) => {
		cursor.each((err, lineRow) =>{
			client.emit(`drawingLine: ${drawingID}`, lineRow.new_val)
		})
	})
}



function handleLinePublish({connection, line}){
	
	r.table('lines')
	.insert(Object.assign(line, {timestamp: new Date()}))
	.run(connection);

}


r.connect({host : 'localhost', port: 28015, db: 'realtime'})
 .then((connection) => {
	io.on("connection", (client) => {
		// send respond to event to that particular connected client.
		// event Interested is subscribeToTimer that we will emit from react app later.
		
		client.on('createDrawing', ({ name }) =>{
			createDrawings({ connection, name });
		})

		client.on('subscribeToDrawings', () => {
			subscribeToDrawings({ client, connection })
		})

		client.on('publishLine', ( line ) => {
			handleLinePublish({ connection, line })
		})

		client.on('subscribeToDrawingsLines', ( drawingID ) => {
			subscribeToDrawingsLines({ client, connection , drawingID})
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