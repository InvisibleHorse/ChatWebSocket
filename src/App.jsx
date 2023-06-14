import React from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
    const socket = () => {
        io('http://localhost:8888');
    };
    return (
        <div className="App">
            <button type="button" onClick={socket}>CLICK</button>
        </div>
    );
}

export default App;
