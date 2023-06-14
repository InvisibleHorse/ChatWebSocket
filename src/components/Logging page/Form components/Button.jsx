import React from 'react';
import s from './Form.module.css';

export default function Button() {
    return <button type="submit" className={`${s.button} ${s.formText} btn`}>Log me in</button>;
}
