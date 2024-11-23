import React, { useState } from "react";
import Header from "../components/Header";
import RestaurantSlider from "../components/RestaurantSlider";
import RestaurantGrid from "../components/RestaurantGrid";
import "./MainPage.css";

const MainPage = () => {
    const [isSearchActive, setSearchActive] = useState(false);

    const handleSearchClick = () => {
        setSearchActive(true);
    };

    return (
        <div className="main-container">
            {/* 상단 헤더 */}
            <Header />

            {/* 왼쪽 컨테이너와 오른쪽 컨테이너를 포함하는 큰 컨테이너 */}
            <div className={`content-wrapper ${isSearchActive ? "shrink" : ""}`}>
                {/* 왼쪽 컨테이너 */}
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

                {/* 오른쪽 컨테이너 */}
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

            {/* 슬라이더 or 그리드 */}
            {isSearchActive ? (
                <div className="grid-container">
                    <RestaurantGrid />
                </div>
            ) : (
                <div className="slider-container">
                    <RestaurantSlider />
                </div>
            )}
        </div>
    );
};

export default MainPage;
