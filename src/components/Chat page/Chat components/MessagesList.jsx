import React from 'react';
import PropTypes from 'prop-types';
import EachMessage from './Messages details/EachMessage';
import s from '../Chat.module.css';

export default function MessagesList({ messages, currentUser }) {
    return (
        <div className={`${s.messageList}`}>
            {messages.map(message => {
                const isCurrentUser = message.userName === currentUser;
                const messageClass = isCurrentUser ? s.yourMessage : s.notYourMessage;
                return (
                    <EachMessage
                        text={message.text}
                        user={message.userName}
                        className={messageClass}
                    />
                );
            })}
        </div>
    );
}
MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            userName: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
    currentUser: PropTypes.string.isRequired,
};
