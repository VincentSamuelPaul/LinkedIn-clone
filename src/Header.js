import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='LinkedIn' />
                <div className="header__search">
                <SearchIcon/>
                    <input placeholder='Search' type='text' />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={NotificationsIcon} title='Notification'/>
                <HeaderOption Icon={MessageIcon} title='Messages'/>
                <HeaderOption avatar='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png' title='Me' />

            </div>
        </div>
    )
}

export default Header