import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import Map from "./pages/Map";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [likedRestaurants, setLikedRestaurants] = useState([]);

    // localStorage에서 로그인 정보 불러오기
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem("isLoggedIn");
        const storedUserName = localStorage.getItem("userName");

        if (storedLoginStatus === "true" && storedUserName) {
            setIsLoggedIn(true);
            setUserName(storedUserName);
        }
    }, []);

    // 로그인 상태가 변경될 때 localStorage에 저장
    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUserName(name);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", name);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName("");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                            setLikedRestaurants={setLikedRestaurants}
                            likedRestaurants={likedRestaurants}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={<LoginPage setIsLoggedIn={handleLogin} />}
                />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                    path="/mypage"
                    element={
                        <MyPage
                            userName={userName}
                            likedRestaurants={likedRestaurants}
                            handleLogout={handleLogout}
                        />
                    }
                />
                <Route path="/map" element={<Map isLoggedIn={isLoggedIn} userName={userName} />} />
            </Routes>
        </Router>
    );
}

export default App;
