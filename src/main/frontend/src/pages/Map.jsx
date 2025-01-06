/* global naver */
import React, { useEffect, useState } from "react";
import "./Map.css";
import Header from "../components/Header";
import mockData from "../data/mockData";

function Map() {
    const [restaurantList] = useState(mockData);
    const [setSelectedRestaurant] = useState(null);
    const [map, setMap] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const loadNaverMap = () => {
            const clientId = process.env.REACT_APP_CLIENT_ID;

            if (!clientId) {
                console.error("네이버 지도 API 클라이언트 ID가 설정되지 않았습니다.");
                return;
            }

            const script = document.createElement("script");
            script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
            script.async = true;
            script.onload = initializeMap;
            script.onerror = () => {
                console.error("네이버 지도 API 로드에 실패했습니다.");
            };
            document.head.appendChild(script);
        };

        const initializeMap = () => {
            if (!window.naver) {
                console.error("네이버 지도 API가 로드되지 않았습니다.");
                return;
            }

            const {naver} = window;

            const mapInstance = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(37.5665, 126.9780),
                zoom: 14,
            });

            setMap(mapInstance);

            restaurantList.forEach((restaurant) => {
                const marker = new naver.maps.Marker({
                    position: new naver.maps.LatLng(restaurant.latitude, restaurant.longitude),
                    map: mapInstance,
                });

                naver.maps.Event.addListener(marker, "click", () => {
                    setSelectedRestaurant(restaurant);
                });
            });
        };
        loadNaverMap();
    }, [restaurantList]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredRestaurants = restaurantList.filter((restaurant) =>
        restaurant.name.includes(searchQuery) || restaurant.category.includes(searchQuery)
    );

    return (
        <div className="map-container">
            <Header />
            <div className="map-sidebar">
                <div className="map-search-container">
                    <input
                        type="text"
                        className="map-search-bar"
                        placeholder="셰프, 레스토랑으로 검색하세요"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="map-card-list">
                    {filteredRestaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="map-restaurant-card"
                            onClick={() => {
                                setSelectedRestaurant(restaurant);
                                map.setCenter(new naver.maps.LatLng(restaurant.latitude, restaurant.longitude));
                            }}
                        >
                            <div className="map-card-content">
                                <h3>{restaurant.name}</h3>
                                <p>{restaurant.category}</p>
                                <p><strong>주소:</strong> {restaurant.address}</p>
                                <p><strong>연락처:</strong> {restaurant.phone}</p>
                                <p><strong>메뉴:</strong> {restaurant.menu.join(", ")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="map" className="map"></div>
        </div>
    );
}

export default Map;

// TODO: 백엔드와 연동
// - 백엔드 API 호출로 `mockData` 대신 실제 데이터를 가져오는 로직 추가
// - `useEffect`에서 fetch/axios를 사용하여 데이터 로드 구현
