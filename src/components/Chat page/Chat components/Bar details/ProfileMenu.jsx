import React from 'react';
import Avatar from './Avatar';

export default function ProfileMenu() {
    return (
        <div className="dropdown">
            <Avatar />
            <ul className="dropdown-menu text-small shadow">
                <li><a className="dropdown-item" href="/">Create new chat...</a></li>
                <li><a className="dropdown-item" href="/">Settings</a></li>
                <li><a className="dropdown-item" href="/">Profile</a></li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="/">Sign out</a></li>
            </ul>
        </div>
    );
}
