import React from 'react';
import MessageInput from './Chat components/MessageInput';
import Bar from './Chat components/Bar';
import MessagesList from './Chat components/MessagesList';
import s from './Chat.module.css';

export default function ChatMain() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`${s.zeroPadding} col-2`}>
                    <Bar />
                </div>
                <div className={`${s.mainChat} col`}>
                    <div className={`${s.mainChatElement} row`}>
                        <MessagesList />
                    </div>
                    <div className={`${s.mainChatElement} row`}>
                        <MessageInput />
                    </div>
                </div>
            </div>
        </div>
    );
}
