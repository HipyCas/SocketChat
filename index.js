/* jshint esversion: 6 */

const path = require('path');

const express = require('express');
const cors = require('cors');

const Server = require('http').Server;
const socket = require('socket.io');

const app = express();
app.use(
	cors({
		origin: function (origin, callback) {
			let allowedOrigins = [
				'localhost:5000',
				'localhost:3000',
				'localhost:3001',
				'172.17.203.241:3000',
				'172.17.203.241:3001',
				'172.17.203.241:5000',
				'acer.duo:5000',
				'acer.duo:3000',
				'acer.duo:3001',
			];

			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) return callback(null, true);

			//if (allowedOrigins.indexOf(origin) === -1) {
			//	var msg =
			//		'The CORS policy for this site does not ' +
			//		'allow access from the specified Origin.';
			//	return callback(new Error(msg), false);
			//}
			return callback(null, true);
		},
	})
);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const http = Server(app);
const io = socket(http);

io.on('connection', (socket) => {
	console.log(
		`${Intl.DateTimeFormat('es', {
			dateStyle: 'full',
			timeStyle: 'full',
		}).format(new Date(Date.now()))}> User connected`
	);

	socket.on('disconnect', () => {
		console.log(
			`${Intl.DateTimeFormat('es', {
				dateStyle: 'full',
				timeStyle: 'full',
			}).format(new Date(Date.now()))}> User disconnected`
		);
	});

	socket.on('chat message', (message) => {
		console.log(
			`${Intl.DateTimeFormat('es', {
				dateStyle: 'full',
				timeStyle: 'full',
			}).format(new Date(Date.now()))}> Received message from user ${
				message.username
			}: ${message.message}`
		);
		message.timestamp = Date.now();
		io.emit('server message', message);
	});

	socket.on('new user', (username) => {
		console.log(
			`${Intl.DateTimeFormat('es').format(
				new Date(Date.now())
			)}> New user registered with username ${username}`
		);
		io.emit('server message', {
			username: 'SocketChat',
			message: `${username} has joined the party!`,
      timestamp: Date.now(),
      type: 'message'
		});
	});
});

http.listen(process.env.PORT, () => {
	console.log('Server listening in *:3000');
});
