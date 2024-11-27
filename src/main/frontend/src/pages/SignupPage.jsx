import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await fetch("https://heukbaeguide.com/v1/createaccount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            });

            if (response.ok) {
                const data = await response.json();
                alert("회원가입 성공! 이제 로그인하세요.");
                navigate("/login"); // 로그인 페이지로 이동
            } else {
                alert("회원가입 실패. 입력한 정보를 확인해주세요.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div className="auth-container">
            <div className="back-container">
                <img
                    src="/images/BackGround_Image.png"
                    alt="Background"
                />
            </div>
            <div className="title-box">
                <h1 className="title-text">Sign Up</h1>
            </div>
            <div className="auth-box">
                <form onSubmit={handleSignup}>
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
                    <input
                        type="password"
                        placeholder="비밀번호를 재입력해주세요"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="text"
                        placeholder="이름을 입력해주세요"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <button type="submit" className="auth-button">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
