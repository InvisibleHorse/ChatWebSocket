import React from 'react';
import PropTypes from 'prop-types';
import MessageInput from './Chat components/MessageInput';
import Bar from './Chat components/Bar';
import MessagesList from './Chat components/MessagesList';
import s from './Chat.module.css';

// eslint-disable-next-line no-unused-vars
export default function ChatMain({ users, messages }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`${s.zeroPadding} col-2`}>
                    <Bar users={users} />
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
ChatMain.propTypes = {
    users: PropTypes.instanceOf(Array),
    messages: PropTypes.instanceOf(Array),
};
