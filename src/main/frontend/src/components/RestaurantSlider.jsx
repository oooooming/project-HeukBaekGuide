import React, { useState, useEffect } from "react";
import "./RestaurantSlider.css";

const RestaurantSlider = ({ data }) => {
    const [randomRestaurants, setRandomRestaurants] = useState([]);

    useEffect(() => {
        if (data.length > 10) {
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            setRandomRestaurants(shuffled.slice(0, 10));
        } else {
            setRandomRestaurants(data); // 데이터가 10개 이하인 경우 그대로 사용
        }
    }, [data]);

    return (
        <div className="restaurant-slider">
            {/* 레스토랑 데이터를 슬라이드 형식으로 표시 */}
            {randomRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="slider-card">
                    <img src={restaurant.image} alt={restaurant.name} />
                    <div className="slider-info">
                        <h3>{restaurant.name}</h3>
                        <p>{restaurant.address}</p>
                        <p>{restaurant.phone}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantSlider;
