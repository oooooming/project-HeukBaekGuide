import React, { useState, useEffect, useRef } from "react";
import "./RestaurantSlider.css";

const RestaurantSlider = ({ data, onLike }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300, // 카드 하나 크기만큼 이동
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300, // 카드 하나 크기만큼 이동
            behavior: "smooth",
        });
    };

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
        <div className="restaurant-slider-container">
            <button className="arrow-button left" onClick={scrollLeft}>
                &#8249;
            </button>
            <div className="restaurant-slider" ref={sliderRef}>
                {data.map((restaurant) => (
                    <div key={restaurant.id} className="slider-card">
                        <img src={restaurant.image} alt={restaurant.name} />
                        <div className="slider-info">
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.address}</p>
                            <p>{restaurant.phone}</p>
                            <button
                                className="like-button"
                                onClick={() => onLike(restaurant)}
                            >
                                ❤️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="arrow-button right" onClick={scrollRight}>
                &#8250;
            </button>
        </div>
    );
};

export default RestaurantSlider;
