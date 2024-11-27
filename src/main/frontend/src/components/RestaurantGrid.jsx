import React from "react";
import "./RestaurantGrid.css";

const RestaurantGrid = ({ data }) => {
    return (
        <div className="restaurant-grid">
            {/* 레스토랑 데이터를 그리드 형식으로 표시 */}
            {data.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-card">
                    <img src={restaurant.image} alt={restaurant.name} />
                    <div className="card-info">
                        <h3>{restaurant.name}</h3>
                        <p><strong>주소:</strong> {restaurant.address}</p>
                        <p><strong>연락처:</strong> {restaurant.phone}</p>
                        <p><strong>메뉴:</strong> {restaurant.menu.join(", ")}</p>
                        <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
                            홈페이지로 이동
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantGrid;
