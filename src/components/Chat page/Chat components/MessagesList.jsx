import React from 'react';
import EachMessage from './Messages details/EachMessage';
import s from '../Chat.module.css';

export default function MessagesList() {
    return (
        <div className={`${s.messageList}`}>
            <EachMessage
                text="Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
             labore et dolore magna aliqua." className={`${s.yourMessage}`}
            />
            <EachMessage
                text="Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat." className={`${s.notYourMessage}`}
            />
        </div>
    );
}
