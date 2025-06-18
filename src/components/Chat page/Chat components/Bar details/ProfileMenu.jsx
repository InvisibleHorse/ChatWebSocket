import React from 'react';
import Avatar from './Avatar';

export default function ProfileMenu() {
    return (
        <div className="dropdown">
            <Avatar />
            <ul className="dropdown-menu text-small shadow">
                <li><a className="dropdown-item" href="/ChatWebSocket/">Create new chat...</a></li>
                <li><a className="dropdown-item" href="/ChatWebSocket/">Settings</a></li>
                <li><a className="dropdown-item" href="/ChatWebSocket/">Profile</a></li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="/ChatWebSocket/">Sign out</a></li>
            </ul>
        </div>
    );
}
