import React from 'react';
import FormField from './Form components/FormFiled';
import s from './Form components/Form.module.css';
import Button from './Form components/Button';

export default function Form() {
    return (
        <div className={`${s.container} h-100 d-inline-block`}>
            <h1 className={`${s.formText} ${s.h1}`}>Let&apos;`s log you in!</h1>
            <FormField type="number" placeholder="Room ID" text="Please, enter the room's ID: " />
            <FormField type="text" placeholder="Your name" text="Please, type in your name: " />
            <Button />
        </div>
    );
}
