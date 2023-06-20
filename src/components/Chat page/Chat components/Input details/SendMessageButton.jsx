import React from 'react';
import PropTypes from 'prop-types';
import s from '../../Chat.module.css';
import st from '../../../Logging page/Form components/Form.module.css';

export default function SendMessageButton({ onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${s.sendMessageBtn} ${st.button} btn`}
        >Send
        </button>
    );
}
SendMessageButton.propTypes = {
    onClick: PropTypes.func,
};
