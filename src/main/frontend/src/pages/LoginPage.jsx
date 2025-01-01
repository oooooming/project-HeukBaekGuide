import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";
import { mockUser } from "../data/mockData";

const LoginPage = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // 백엔드 연동 주석 처리
        /*
        try {
            const response = await fetch("https://heukbaeguide.com/v1/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("로그인 성공!");
                setIsLoggedIn(true);
                navigate("/");
            } else {
                alert("로그인 실패. 이메일과 비밀번호를 확인해주세요.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
        */

        // 프론트엔드에서만 확인
        if (email === mockUser.email && password === mockUser.password) {
            alert("로그인 성공!");
            setIsLoggedIn(true); // 로그인 상태 업데이트
            navigate("/"); // 메인 페이지로 이동
        } else {
            alert("로그인 실패. 이메일과 비밀번호를 확인해주세요.");
        }
    };

    return (
        <div className="auth-container">
            <div className="back-container">
                <img src="/images/BackGround_Image.png" alt="Background" />
            </div>
            <div className="title-box">
                <h1 className="title-text">Login</h1>
            </div>
            <div className="auth-box">
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="메일을 입력해주세요"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <button type="submit" className="auth-button">
                        Login
                    </button>
                    <button
                        type="button"
                        className="auth-link-button"
                        onClick={() => navigate("/signup")}
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;