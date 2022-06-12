import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css';
import { auth } from './firebaseConfig';
import { signOut } from '@firebase/auth';

const Sidebar = ({ user, setUser }) => {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    const logOut = () => {
        signOut(auth);
        setUser();
        localStorage.removeItem('userCred');
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src='data:image/jpeg;base64,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' alt='profile' />
                <Avatar className='sidebar__avatar' />
                <h2>{user.name || user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__StatNumber">1200</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__StatNumber">1200</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJS')}
                {recentItem('CODE')}
                {recentItem('Programming')}
            </div>
            <div className="sidebar__logout">
                <button onClick={logOut}>Sign Out</button>
            </div>
        </div>
    )
}

export default Sidebar