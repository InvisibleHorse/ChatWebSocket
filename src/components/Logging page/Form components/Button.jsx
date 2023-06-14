import React from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

export default function Button({ onClick, text, disabled }) {
    return (
        <button
            disabled={disabled}
            type="submit"
            className={`${s.button} ${s.formText} btn`}
            onClick={onClick}
        >{text}
        </button>
    );
}
Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
};
