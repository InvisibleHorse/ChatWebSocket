import React from 'react';
import s from '../../Chat.module.css';

export default function Avatar() {
    return (
        <a
            href="/"
            className={` ${s.forSidebar} 
            d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle`}
            data-bs-toggle="dropdown" aria-expanded="false"
        >
            <img
                src="https://cdn-icons-png.flaticon.com/512/4715/4715330.png" alt="" width="32"
                height="32"
                className="rounded-circle me-2"
            />
            <strong>Me</strong>
        </a>
    );
}
