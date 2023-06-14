import React from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

export default function FormField({ type, placeholder, text }) {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className={`${s.formText} form-label`}> {text}
                <input
                    type={type}
                    className={`${s.input} form-control`}
                    id="exampleFormControlInput1"
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
}
FormField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
