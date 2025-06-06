import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 전환을 위한 useNavigate 추가
import Header from "../components/Header";
import RestaurantSlider from "../components/RestaurantSlider";
import RestaurantGrid from "../components/RestaurantGrid";
import "./MainPage.css";
import mockData from "../data/mockData"; // mockdata import

const MainPage = ({ isLoggedIn, setIsLoggedIn, likedRestaurants, setLikedRestaurants }) => {
    const [isSearchActive, setSearchActive] = useState(false);
    const [restaurantList, setRestaurantList] = useState([]); // 전체 데이터
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // 필터링된 데이터
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
    const [top10Restaurants, setTop10Restaurants] = useState([]); // 랜덤 Top10 데이터
    const navigate = useNavigate(); // 페이지 전환을 위한 네비게이트 함수

    const handleSearchClick = () =>{
      setSearchActive(true);

      if(!searchQuery){
          setFilteredRestaurants(restaurantList);
      }
    };
    const handleOutsideClick = () => setSearchActive(false);

    // 좋아요 버튼 클릭 처리
    const handleLike = (restaurant) => {
        if (!likedRestaurants.some((item) => item.id === restaurant.id)) {
            setLikedRestaurants([...likedRestaurants, restaurant]);
            alert(`${restaurant.name}이(가) 좋아요 목록에 추가되었습니다!`);
        } else {
            alert(`${restaurant.name}은(는) 이미 좋아요 목록에 있습니다.`);
        }
    };

    // MyPage로 이동
    const navigateToMyPage = () => {
        navigate("/mypage");
    };

    // Map으로 이동
    const navigateToMap = () => {
        navigate("/map");
    };

    const handleSearchInputChange = (e) => {
        const query = e.target.value.trim();
        setSearchQuery(query);

        // 검색 결과 필터링: 지역 (address) 및 제목 (name) 기반
        const filtered = restaurantList.filter(
            (restaurant) =>
                (restaurant.address && restaurant.address.includes(query)) ||
                (restaurant.name && restaurant.name.includes(query))
        );
        setFilteredRestaurants(filtered);
    };

    useEffect(() => {
        // Mock 데이터 사용
        setRestaurantList(mockData);

        // 실제 API 연동 시 아래 주석을 해제하세요
        /*
        fetch("/api/restaurants")
            .then((res) => res.json())
            .then((data) => setRestaurantList(data)) // 전체 데이터 저장
            .catch((err) => console.error("Failed to fetch restaurants:", err));
        */
    }, []);

    useEffect(() => {
        // Mock 데이터에서 랜덤 Top10 추출
        const shuffled = [...mockData].sort(() => 0.5 - Math.random());
        setTop10Restaurants(shuffled.slice(0, 10));

        // 실제 API 연동 시 아래 주석을 해제하세요
        /*
        fetch("/api/restaurants/random?limit=10")
            .then((res) => res.json())
            .then((data) => setTop10Restaurants(data)) // 랜덤 Top10 데이터 저장
            .catch((err) => console.error("Failed to fetch top 10 restaurants:", err));
        */
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
                    <div className="main-search-container">
                        <input
                            type="text"
                            className="main-search-bar"
                            placeholder="레스토랑, 지역으로 검색하세요"
                            onClick={handleSearchClick}
                            onChange={handleSearchInputChange}
                            value={searchQuery}
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
                    <RestaurantGrid data={filteredRestaurants} onLike={handleLike} />
                </div>
            ) : (
                <div className="slider-container">
                    <RestaurantSlider data={top10Restaurants} onLike={handleLike} />
                </div>
            )}
        </div>
    );
};

export default MainPage;
