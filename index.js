/* jshint esversion: 6 */

const path = require('path');

const express = require('express');
const cors = require('cors');

const Server = require('http').Server;
const socket = require('socket.io');

//* APP DECLARATION AND MIDDLEWARE
// Create express app object
const app = express();
// Set CORS rules
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
// Serve static files
app.use('/', express.static(path.join(__dirname, 'dist/')));

//* ROUTES
// Serve index.html file
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//* SOCKET OBJECT DECLARATION
const http = Server(app);
const io = socket(http);

//* GLOBAL VARIABLES
// List of banned session IDs
var bannedIDs = [];

//* REGEXPS
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;
var websiteRegex = /[-a-zA-Z0-9:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9():%_\+.~#?&//=]*)/gi;

//* SOCKET FUNCTIONS
io.on('connection', (socket) => {
	log(`User connected. Session ID: ${socket.id}`);

	socket.on('disconnect', () => {
		log(`User disconnected`);
	});

	socket.on('chat message', (message) => {
		log(`Received message from user ${message.username}: ${message.message}`);
		if (websiteRegex.test(message.message)) log('Message has website');
		message.message = message.message.replace(websiteRegex, 'hidden.example.com');
		if (emailRegex.test(message.message)) log('Message has email');
		message.message = message.message.replace(emailRegex, 'hidden@example.com');
		message.timestamp = Date.now();
		io.emit('server message', message);
	});

	socket.on('new user', (username) => {
		log(
			`New user registered with username ${username} (banned: ${
				bannedIDs.indexOf(socket.id) !== -1
			})`
		);
		if (bannedIDs.indexOf(socket.id) === -1) {
			io.emit('server message', {
				username: 'SocketChat',
				message: `${username} has joined the party!`,
				timestamp: Date.now(),
				type: 'message',
			});
		} else {
			io.emit('server message', {
				username: 'SocketChat',
				message: 'You have been banned and thus you cannot send any messages',
				timestamp: Date.now(),
				type: 'message',
			});
		}
	});

	socket.on('ban me', () => {
		bannedIDs.push(socket.id);
		log(`Socket ID ${socket.id} banned`);
	});
});

http.listen(process.env.PORT, () => {
	console.log(`Server listening in *:${process.env.PORT}`);
});

//* CUSTOM FUNCTIONS
/**
 * Simple wrapper for log which includes date and time and a '>' character at the beginning of every line
 *
 * @param {string} str A string to log
 * @param {object} dateFormatOptions An object to be passed to the Intl.DateTimeFormat method
 */
function log(
	str,
	dateFormatOptions = {
		dateStyle: 'full',
		timeStyle: 'full',
	}
) {
	console.log(
		`${Intl.DateTimeFormat('es', dateFormatOptions).format(
			new Date(Date.now())
		)}> ${str}`
	);
}
