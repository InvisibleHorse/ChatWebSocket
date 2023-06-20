import React from 'react';
import PropTypes from 'prop-types';
import s from '../Chat.module.css';
import SendMessageButton from './Input details/SendMessageButton';

export default function MessageInput({ onChange, onClick, value }) {
    return (
        <form>
            <div className={`${s.messageInput} mb-3`}>
                <textarea
                    type="text" className="form-control" id="exampleInputEmail1"
                    value={value} onChange={onChange} aria-describedby="emailHelp"
                />
                <SendMessageButton onClick={onClick} />
            </div>
        </form>
    );
}
MessageInput.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    value: PropTypes.string,
};
