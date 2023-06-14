import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import FormField from './Form components/FormFiled';
import s from './Form components/Form.module.css';
import Button from './Form components/Button';

export default function Form({ onSignIn }) {
    const [roomID, setRoomID] = useState('');
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line consistent-return
    const onEnter = async () => {
        if (!roomID || !userName) {
            return alert('Please check if all fields are filled in correctly');
        }
        setLoading(true);
        await axios.post('http://localhost:8888/rooms', {
            roomID,
            userName,
        });
        onSignIn();
    };

    return (
        <div className={`${s.container} h-100 d-inline-block`}>
            <h1 className={`${s.formText} ${s.h1}`}>Let&apos;`s log you in!</h1>
            <FormField
                type="number"
                placeholder="Room ID"
                text="Please, enter the room's ID: "
                value={roomID}
                onChange={e => setRoomID(e.target.value)}
                id="InputNumber1"
            />
            <FormField
                type="text"
                placeholder="Your name"
                text="Please, type in your name: "
                value={userName}
                onChange={e => setUserName(e.target.value)}
                id="InputNumber2"
            />
            <Button disabled={loading} text={loading ? 'Logging in...' : 'Log me in'} onClick={onEnter} />
        </div>
    );
}
Form.propTypes = {
    onSignIn: PropTypes.func,
};
