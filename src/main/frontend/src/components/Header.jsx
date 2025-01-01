import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        setIsLoggedIn(false);
        alert("로그아웃되었습니다.");
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
                {location.pathname === "/mypage" ? (
                    // MyPage 화면에서 MyPage만 표시
                    <button
                        className="menu-button"
                        onClick={() => navigate("/mypage")}
                    >
                        MyPage
                    </button>
                ) : isLoggedIn ? (
                    <button
                        className="menu-button"
                        onClick={() => navigate("/mypage")}
                    >
                        MyPage
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
