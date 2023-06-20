import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import socket from './socket';
import './App.css';
import Form from './components/Logging page/Form';
import reducer from './reducer';
import ChatMain from './components/Chat page/ChatMain';

function App() {
    const [state, dispatch] = useReducer(reducer, {
        isAuth: false,
        roomID: null,
        userName: null,
        users: [],
        messages: [],
    });

    const setUsers = users => {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        });
    };
    const onSignIn = async obj => {
        dispatch({
            type: 'IS_AUTH',
            payload: obj,
        });
        socket.emit('ROOM_JOIN', obj);
        const { data } = await axios.get(`http://localhost:8888/rooms/${obj.roomID}`);
        setUsers(data.users);
    };

    useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers);
    }, []);

    window.socket = socket;

    return (
        <div className="App">
            {!state.isAuth ? <Form onSignIn={onSignIn} /> : <ChatMain {...state} />}
        </div>
    );
}

export default App;
