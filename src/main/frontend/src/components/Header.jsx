import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <header className="header">
            <div className="logo">
                <img
                    src="/images/HeukBaekGuide_Logo.png"
                    alt="흑백가이드 로고"
                    className="logo-image"
                    onClick={() => navigate("/")}
                />
            </div>
            <div className="menu">
                <button
                    className="menu-button"
                    onClick={() => navigate("/map")}
                >
                    Map
                </button>
                {isLoggedIn ? (
                    <button className="menu-button" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button
                        className="menu-button"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
