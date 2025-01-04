import React from "react";
import "../styles/MyPage.css";

const Sidebar = ({ setActivePage }) => {
    return (
        <div className="mypage-sidebar">
            <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="profile-img"
            />
            <h3>oooooming_</h3>
            <ul>
                <li onClick={() => setActivePage("likes")}>likes</li>
                <li onClick={() => setActivePage("visited")}>visited</li>
            </ul>
            <div className="sidebar-footer">
                <span>logout</span> | <span>withdrawal</span>
            </div>
        </div>
    );
};

export default Sidebar;
