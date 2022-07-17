import React, { useState } from 'react';
import home from '../../../assets/home.svg';
import menuIcon from '../../../assets/menuIcon.svg';
import chat from '../../../assets/chat.svg';
import calendar from '../../../assets/calendar.svg';
import client from '../../../assets/client.svg';
import finance from '../../../assets/finance.svg';
import { NavLink } from 'react-router-dom';
import './styles.css';

const CollapisbleSidebar = ({component}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const menuItem = [
        {
            path: "/",
            name: "Clients",
            icon: <img src={client}/>
        },
        {
            path: "/home",
            name: "Home",
            icon: <img src={home}/>
        },
        {
            path: "/finance",
            name: "Finance",
            icon: <img src={finance}/>
        },
        {
            path: "/schedule",
            name: "Schedule",
            icon: <img src={home}/>
        },
        {
            path: "/packages",
            name: "Packages",
            icon: <img src={home}/>
        },
        {
            path: "/programs",
            name: "Programs",
            icon: <img src={home}/>
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <img src={home}/>
        },
        {
            path: "/chats",
            name: "Chats",
            icon: <img src={chat}/>
        },
        {
            path: "/bookings",
            name: "Bookings",
            icon: <img src={calendar}/>
        },
        {
            path: "/resources",
            name: "Resouces",
            icon: <img src={home}/>
        },
    ]
  return (
    <div className="box">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
          <div className="top_section">
            <div style={{marginLeft: isOpen ? "100px" : "0px"}} className="bars">
               <img src={menuIcon} onClick={toggle}/>
            </div>
          </div>
          {
            menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className='icon'>{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
          }
        </div>
        <main>{component}</main>
    </div>
  )
}

export default CollapisbleSidebar;
