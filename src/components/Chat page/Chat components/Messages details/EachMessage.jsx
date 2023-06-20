import React from 'react';
import PropTypes from 'prop-types';
import s from '../../Chat.module.css';

export default function EachMessage({ text, className, user }) {
    return (
        <div className={className}>
            <div className="container">
                <span className={s.span}>{user}</span>
                <blockquote className={`${s.blockquote}`}>{text}</blockquote>
            </div>
        </div>
    );
}
EachMessage.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    user: PropTypes.string,
};
