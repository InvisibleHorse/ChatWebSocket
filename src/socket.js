import io from 'socket.io-client';

const API_URL = 'https://chatwebsocket-4zey.onrender.com/';
const socket = io(API_URL);

export default socket;
