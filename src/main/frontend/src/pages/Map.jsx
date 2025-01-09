/* global naver */
import React, { useEffect, useState, useRef } from "react";
import "./Map.css";
import Header from "../components/Header";
import mockData from "../data/mockData";

function Map() {
    const [restaurantList] = useState(mockData);
    const [map, setMap] = useState(null);
    const markersRef = useRef({});
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const clientId = process.env.REACT_APP_CLIENT_ID;
        if (!clientId) {
            console.error("네이버 지도 API 클라이언트 ID가 설정되지 않았습니다.");
            return;
        }

        const script = document.createElement("script");
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}&submodules=geocoder`;
        script.async = true;
        script.onload = () => {
            console.log("네이버 지도 API 로드 완료");
            initializeMap();
        };
        document.head.appendChild(script);

        const initializeMap = () => {
            setTimeout(() => {
                if (!window.naver || !window.naver.maps || !window.naver.maps.Service) {
                    console.error("네이버 지도 geocode 서비스가 로드되지 않았습니다. API 키 및 submodules 확인 필요");
                    return;
                }
                console.log("네이버 지도 geocode 서비스 로드 완료");

                const mapInstance = new naver.maps.Map("map", {
                    center: new naver.maps.LatLng(37.5665, 126.9780),
                    zoom: 14,
                });
                setMap(mapInstance);
                loadMarkers(mapInstance);
            }, 300);
        };

        const loadMarkers = (mapInstance) => {
            restaurantList.forEach((restaurant) => {
                if (!markersRef.current[restaurant.id]) {
                    naver.maps.Service.geocode({ query: restaurant.address }, (status, response) => {
                        if (status === naver.maps.Service.Status.OK && response.v2.addresses.length) {
                            const { y: lat, x: lng } = response.v2.addresses[0];
                            const marker = createMarker(new naver.maps.LatLng(lat, lng), mapInstance, restaurant);
                            markersRef.current[restaurant.id] = { lat, lng, marker };
                        }
                    });
                }
            });
        };

        const createMarker = (position, mapInstance, restaurant) => {
            const marker = new naver.maps.Marker({
                position,
                map: mapInstance,
                icon: {
                    content: `<img src="/images/HeukBaekGuide_Logo.png" alt="Logo" style="width: 30px; height: 30px;" />`,
                    anchor: new naver.maps.Point(15, 15),
                },
            });

            const infoWindow = new naver.maps.InfoWindow({
                content: `
                    <div style="padding:10px; font-size:14px;">
                        <strong>${restaurant.name}</strong><br>
                        ${restaurant.address}<br>
                        <a id="infoWindowBtn-${restaurant.id}" href="${restaurant.url}" target="_blank" style="margin-top: 5px; color: gray; text-decoration: none;">more info</a>
                    </div>
                `,
            });

            naver.maps.Event.addListener(marker, "click", () => {
                infoWindow.open(mapInstance, marker);
            });
            return marker;
        };
    }, [restaurantList]);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);
    const handleCardClick = (restaurant) => {
        const markerData = markersRef.current[restaurant.id];
        if (markerData && map) {
            const { marker, lat, lng } = markerData;
            const newCenter = new naver.maps.LatLng(lat, lng);
            map.setCenter(newCenter);

            // Highlight the marker
            const originalContent = marker.getIcon().content;
            marker.setIcon({
                content: `<img src="/images/HeukBaekGuide_Logo.png" alt="Logo" style="width: 40px; height: 40px; animation: blink 1s infinite;" />`,
                anchor: new naver.maps.Point(20, 20),
            });

            // Reset the marker after 2 seconds
            setTimeout(() => {
                marker.setIcon({
                    content: originalContent,
                    anchor: new naver.maps.Point(15, 15),
                });
            }, 2000);
        }
    };

    const filteredRestaurants = restaurantList.filter((restaurant) =>
        restaurant.name.includes(searchQuery) ||
        restaurant.address?.includes(searchQuery) || // 주소 검색 추가
        restaurant.category?.includes(searchQuery)
    );

    return (
        <div className="map-container">
            <Header />
            <div className="map-sidebar">
                <div className="map-search-container">
                    <input
                        type="text"
                        className="map-search-bar"
                        placeholder="레스토랑, 지역으로 검색하세요"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="map-card-list">
                    {filteredRestaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="map-restaurant-card"
                            onClick={() => handleCardClick(restaurant)}
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
