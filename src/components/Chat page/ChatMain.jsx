import React, { useState } from 'react';
import PropTypes from 'prop-types';
import socket from '../../socket';
import MessageInput from './Chat components/MessageInput';
import Bar from './Chat components/Bar';
import MessagesList from './Chat components/MessagesList';
import s from './Chat.module.css';

// eslint-disable-next-line no-unused-vars
export default function ChatMain({ onAddMessage, users, messages, userName, roomID }) {
    const [message, setMessage] = useState('');

    const onSendMessage = () => {
        socket.emit('ROOM_NEW_MESSAGE', {
            userName,
            roomID,
            text: message,
        });
        onAddMessage({
            userName,
            text: message,
        });
        setMessage('');
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`${s.zeroPadding} col-2`}>
                    <Bar users={users} roomID={roomID} />
                </div>
                <div className={`${s.mainChat} col`}>
                    <div className={`${s.mainChatElement} row`}>
                        <MessagesList messages={messages} />
                    </div>
                    <div className={`${s.mainChatElement} row`}>
                        <MessageInput
                            onClick={onSendMessage}
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
ChatMain.propTypes = {
    users: PropTypes.instanceOf(Array),
    messages: PropTypes.instanceOf(Array),
    userName: PropTypes.string,
    roomID: PropTypes.number,
    onAddMessage: PropTypes.func,
};
