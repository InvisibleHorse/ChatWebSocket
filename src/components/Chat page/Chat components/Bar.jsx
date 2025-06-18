import React from 'react';
import PropTypes from 'prop-types';
import ProfileMenu from './Bar details/ProfileMenu';
import s from '../Chat.module.css';

export default function Bar({ users, roomID }) {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary fullHeight">
            <span className={s.roomNumber}>Room #{roomID}</span>
            <a
                href="/ChatWebSocket/"
                className="d-flex align-items-center justify-content-center
                    mb-3 mb-md-0 link-body-emphasis text-decoration-none"
            >
                <span className={`${s.forSidebar} fs-4`}>Online: ({users.length})</span>
            </a>
            <hr />
            <ul className={`${s.textAlign} ${s.minHeight} nav flex-column mb-auto`}>
                {users.map((name, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={name + index} className="nav-item">
                        <paragpraph className="nav-link active" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16" />
                            {name}
                        </paragpraph>
                    </li>
                ))}
            </ul>
            <hr />
            <ProfileMenu />
        </div>
    );
}
Bar.propTypes = {
    users: PropTypes.instanceOf(Array),
    roomID: PropTypes.number,
};
