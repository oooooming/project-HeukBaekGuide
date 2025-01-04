import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import Map from "./pages/Map";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(""); // 사용자 이름 저장
    const [likedRestaurants, setLikedRestaurants] = useState([]); // 좋아요한 레스토랑 저장

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
                    element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />}
                />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                    path="/mypage"
                    element={
                        <MyPage
                            userName={userName}
                            likedRestaurants={likedRestaurants}
                        />
                    }
                />
                <Route path="/map" element={<Map />} />
            </Routes>
        </Router>
    );
}

export default App;
