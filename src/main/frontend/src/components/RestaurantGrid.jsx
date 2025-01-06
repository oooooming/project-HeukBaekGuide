import React from "react";
import "./RestaurantGrid.css";

const RestaurantGrid = ({ data, onLike }) => {
    return (
        <div className="restaurant-grid">
            {data.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-card">
                    {/* 좋아요 버튼 */}
                    <button
                        className="like-button"
                        onClick={() => onLike(restaurant)}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/HeukBaekGuide_logo.png`}
                            alt="Like"
                            className="like-icon"
                        />
                    </button>
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
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantGrid;
