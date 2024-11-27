import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RestaurantSlider from "../components/RestaurantSlider";
import RestaurantGrid from "../components/RestaurantGrid";
import "./MainPage.css";

const MainPage = ({ isLoggedIn, setIsLoggedIn }) => {
    const [isSearchActive, setSearchActive] = useState(false);
    const [restaurantList, setRestaurantList] = useState([]); // 전체 데이터
    const [top10Restaurants, setTop10Restaurants] = useState([]); // 랜덤 Top10 데이터

    const handleSearchClick = () => setSearchActive(true);
    const handleOutsideClick = () => setSearchActive(false);

    useEffect(() => {
        // 백엔드에서 전체 레스토랑 데이터를 가져오는 API 요청
        fetch("/api/restaurants") // 백엔드 URL을 '/api/restaurants'로 가정
            // 백엔드 응답 형식 예:
            // [
            //     { id: 1, name: "레스토랑1", address: "서울시 강남구", phone: "02-1234-5678", image: "/images/rest1.jpg", menu: ["메뉴1", "메뉴2"], url: "http://restaurant1.com" },
            //     ...
            // ]
            .then((res) => res.json())
            .then((data) => {
                setRestaurantList(data); // 전체 데이터 저장
            })
            .catch((err) => console.error("Failed to fetch restaurants:", err));
    }, []);

    useEffect(() => {
        // 백엔드에서 랜덤 10개의 레스토랑 데이터를 가져오는 API 요청
        fetch("/api/restaurants/random?limit=10") // 백엔드 URL을 '/api/restaurants/random'로 가정
            // 백엔드 응답 형식 예:
            // [
            //     { id: 1, name: "레스토랑1", address: "서울시 강남구", phone: "02-1234-5678", image: "/images/rest1.jpg", menu: ["메뉴1", "메뉴2"], url: "http://restaurant1.com" },
            //     ...
            // ]
            .then((res) => res.json())
            .then((data) => {
                setTop10Restaurants(data); // 랜덤 Top10 데이터 저장
            })
            .catch((err) => console.error("Failed to fetch top 10 restaurants:", err));
    }, []);

    return (
        <div className="main-container" onClick={handleOutsideClick}>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div
                className={`content-wrapper ${isSearchActive ? "shrink" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="left-container">
                    <img
                        src="/images/HeukBaekGuide_Text.png"
                        alt="HeukBaek Guide"
                        className="left-image"
                    />
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="셰프, 레스토랑으로 검색하세요"
                            onClick={handleSearchClick}
                        />
                    </div>
                </div>
                <div className="right-container">
                    <video className="background-video" autoPlay loop muted>
                        <source
                            src="/videos/BackGround_Video.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="video-overlay"></div>
                </div>
            </div>
            {isSearchActive ? (
                <div className="grid-container">
                    <RestaurantGrid data={restaurantList} />
                </div>
            ) : (
                <div className="slider-container">
                    <RestaurantSlider data={top10Restaurants} />
                </div>
            )}
        </div>
    );
};

export default MainPage;