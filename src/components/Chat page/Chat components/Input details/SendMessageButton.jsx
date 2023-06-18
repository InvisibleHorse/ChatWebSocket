import React from 'react';
import s from '../../Chat.module.css';
import st from '../../../Logging page/Form components/Form.module.css';

export default function SendMessageButton() {
    return (
        <button type="button" className={`${s.sendMessageBtn} ${st.button} btn`}>Send</button>
    );
}
