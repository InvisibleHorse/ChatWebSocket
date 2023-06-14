const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const { roomID, userName } = req.body;
    if (!rooms.has(roomID)) {
        rooms.set(roomID, new Map([
            ['users', new Map()],
            ['messages', []],
        ]));
    }
    res.send();
});

io.on('connection', socket => {
    console.log('user connected', socket.id);
});
server.listen(8888, err => {
    if (err) {
        throw Error(err);
    }
    console.log('Everything is working!');
});
