import React, { useReducer } from 'react';
import './App.css';
import Form from './components/Logging page/Form';
import reducer from './reducer';

function App() {
    const [state, dispatch] = useReducer(reducer, {
        isAuth: false,
    });

    const onSignIn = () => {
        dispatch({
            type: 'IS_AUTH',
            payload: true,
        });
    };

    return (
        <div className="App">
            {!state.isAuth && <Form onSignIn={onSignIn} />}
        </div>
    );
}

export default App;
