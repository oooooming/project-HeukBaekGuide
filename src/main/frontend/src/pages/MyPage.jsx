import React, { useState } from "react";
import "./MyPage.css";
import Header from "../components/Header";
import { mockUser, mockLikedRestaurants, mockVisitedRestaurants } from "../data/mockData";

const MyPage = ({ userName = "Test User" }) => {
    const [activeTab, setActiveTab] = useState("visited"); // 현재 활성화된 탭
    const [isPopupVisible, setPopupVisible] = useState(false); // 팝업 토글 상태
    const [visitedRestaurants, setVisitedRestaurants] = useState(mockVisitedRestaurants);
    const [rating, setRating] = useState(0); // 별점 상태

    const handleAddVisited = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newRestaurant = {
            name: formData.get("name"),
            image: formData.get("image") || "/images/default_restaurant.png",
            visitedDate: formData.get("visitedDate"),
            rating: rating,
            review: formData.get("review"),
        };
        setVisitedRestaurants([newRestaurant, ...visitedRestaurants]);
        e.target.reset();
        setRating(0);
        setPopupVisible(false); // 팝업 숨기기
    };

    const handleStarClick = (index) => {
        setRating(index + 1); // 별점 설정
    };

    const handleDeleteVisited = (index) => {
        const updatedVisited = visitedRestaurants.filter((_, i) => i !== index);
        setVisitedRestaurants(updatedVisited);
    };

    const handleDeleteLike = (index) => {
        const updatedLikes = mockLikedRestaurants.filter((_, i) => i !== index);
        console.log("Deleted like at index", index);
    };

    return (
        <div className="mypage-container">
            <Header />
            {/* 좌측 사이드 메뉴 */}
            <div className="sidebar">
                <p className="username">{mockUser.name}</p>
                <nav className="menu">
                    <ul>
                        <li
                            className={activeTab === "likes" ? "active" : ""}
                            onClick={() => setActiveTab("likes")}
                        >
                            likes
                        </li>
                        <li
                            className={activeTab === "visited" ? "active" : ""}
                            onClick={() => setActiveTab("visited")}
                        >
                            visited
                        </li>
                    </ul>
                </nav>
                <div className="footer">
                    <p>logout | withdrawal</p>
                </div>
            </div>

            {/* 우측 컨텐츠 */}
            <div className="content">
                {activeTab === "visited" && (
                    <div>
                        <h2 className="section-title">visited</h2>
                        <button
                            className="add-button"
                            onClick={() => setPopupVisible(true)}
                        >
                            +
                        </button>
                        {isPopupVisible && (
                            <div className="popup">
                                <button
                                    className="close-button"
                                    onClick={() => setPopupVisible(false)}
                                >
                                    ×
                                </button>
                                <form className="add-visited-form" onSubmit={handleAddVisited}>
                                    <div className="form-group">
                                        <label>Restaurant:</label>
                                        <input type="text" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Image:</label>
                                        <input type="file" name="image" accept="image/*" />
                                    </div>
                                    <div className="form-group">
                                        <label>Date:</label>
                                        <input type="date" name="visitedDate" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Rating:</label>
                                        <div className="rating-input">
                                            {[...Array(5)].map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`star ${index < rating ? "filled" : ""}`}
                                                    onClick={() => handleStarClick(index)}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Review:</label>
                                        <textarea
                                            name="review"
                                            placeholder="Write your review"
                                            rows="3"
                                            required
                                        ></textarea>
                                    </div>
                                    <button className="styled-add-button" type="submit">Add</button>
                                </form>
                            </div>
                        )}
                        <div className="visited-list">
                            {visitedRestaurants.map((restaurant, index) => (
                                <div key={index} className="restaurant-card visited-card">
                                    <img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="card-image"
                                    />
                                    <div className="restaurant-info">
                                        <h3>{restaurant.name}</h3>
                                        <p>visited {restaurant.visitedDate}</p>
                                        <div className="rating">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span
                                                    key={i}
                                                    className={
                                                        i < restaurant.rating ? "star filled" : "star"
                                                    }
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <p className="review">{restaurant.review}</p>
                                    </div>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDeleteVisited(index)}
                                    >
                                        delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "likes" && (
                    <div>
                        <h2 className="section-title">likes</h2>
                        <div className="liked-list">
                            {mockLikedRestaurants.map((restaurant, index) => (
                                <div key={index} className="restaurant-card liked-card">
                                    <img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="card-image"
                                    />
                                    <div className="restaurant-info">
                                        <h3>{restaurant.name}</h3>
                                        <p>{restaurant.address}</p>
                                        <p>{restaurant.phone}</p>
                                        <a
                                            href={restaurant.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            More Info
                                        </a>
                                    </div>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDeleteLike(index)}
                                    >
                                        delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPage;