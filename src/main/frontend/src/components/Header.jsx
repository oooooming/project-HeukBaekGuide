import React from "react";
import "./Header.css";

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <img src="/images/HeukBaekGuide_Logo.png" alt="흑백가이드 로고" className="logo-image" />
            </div>
            <div className="menu">
                <a href="/map">Map</a>
                <a href="/login">Login</a>
            </div>
        </header>
    );
}

export default Header;