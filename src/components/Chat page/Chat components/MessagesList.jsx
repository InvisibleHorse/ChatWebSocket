import React from 'react';
import PropTypes from 'prop-types';
import EachMessage from './Messages details/EachMessage';
import s from '../Chat.module.css';

export default function MessagesList({ messages }) {
    return (
        <div className={`${s.messageList}`}>
            {messages.map(message => (
                <EachMessage
                    text={message.text}
                    user={message.userName}
                    className={`${s.yourMessage}`}
                />
            ))}
        </div>
    );
}
MessagesList.propTypes = {
    messages: PropTypes.instanceOf(Array),
};
