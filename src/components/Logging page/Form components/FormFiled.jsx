import React from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

export default function FormField({ type, id, placeholder, text, value, onChange }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className={`${s.formText} form-label`}> {text}
                <input
                    type={type}
                    className={`${s.input} form-control`}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}
FormField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};
