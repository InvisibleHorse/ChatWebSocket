import React from 'react';
import PropTypes from 'prop-types';
import s from '../../Chat.module.css';

export default function EachMessage({ text, className }) {
    return (
        <div className={className}>
            <div className="container">
                <blockquote className={`${s.blockquote}`}>{text}</blockquote>
            </div>
        </div>
    );
}
EachMessage.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};
