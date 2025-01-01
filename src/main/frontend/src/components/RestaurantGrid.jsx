import React from "react";
import "./RestaurantGrid.css";

const RestaurantGrid = ({ data, onLike }) => {
    return (
        <div className="restaurant-grid">
            {data.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-card">
                    <img src={restaurant.image} alt={restaurant.name} />
                    <div className="card-info">
                        <h3>{restaurant.name}</h3>
                        <p>
                            <strong>주소:</strong> {restaurant.address}
                        </p>
                        <p>
                            <strong>연락처:</strong> {restaurant.phone}
                        </p>
                        <p>
                            <strong>메뉴:</strong> {restaurant.menu.join(", ")}
                        </p>
                        <div className="card-actions">
                            <a
                                href={restaurant.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-button"
                            >
                                홈페이지로 이동
                            </a>
                            <button
                                className="like-button"
                                onClick={() => onLike(restaurant)}
                            >
                                ❤️
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantGrid;
