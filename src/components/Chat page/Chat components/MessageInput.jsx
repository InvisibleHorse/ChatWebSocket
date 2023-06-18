import React from 'react';
import s from '../Chat.module.css';
import SendMessageButton from './Input details/SendMessageButton';

export default function MessageInput() {
    return (
        <form>
            <div className={`${s.messageInput} mb-3`}>
                <input
                    type="text" className="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                <SendMessageButton />
            </div>
        </form>
    );
}
