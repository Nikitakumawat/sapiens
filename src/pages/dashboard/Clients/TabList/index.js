import React from 'react';
import './style.css';

function TabList() {
    return (
        <div className='tabList'>
            <ul className="nav nav-tabs col-lg-8 container mt-5" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Clients</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab"  role="tab" aria-controls="profile" aria-selected="false">Tab1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Tab2</a>
                </li>
            </ul>
        </div>
    )
}

export default TabList;
