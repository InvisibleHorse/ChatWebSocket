import React, { useEffect, useReducer } from 'react';
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
    });

    const onSignIn = obj => {
        dispatch({
            type: 'IS_AUTH',
            payload: obj,
        });
        socket.emit('ROOM_JOIN', obj);
    };
    useEffect(() => {
        socket.on('ROOM_JOINED', users => {
            console.log('New user', users);
        });
    }, []);

    return (
        <div className="App">
            {!state.isAuth ? <Form onSignIn={onSignIn} /> : <ChatMain />}
        </div>
    );
}

export default App;
