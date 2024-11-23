import React from "react";
import "./RestaurantSlider.css";

const RestaurantSlider = ({ showAll }) => {
    const dummyCards = [
        { id: 1, title: "Restaurant A", description: "Delicious !" },
        { id: 2, title: "Restaurant B", description: "Delicious !" },
        { id: 3, title: "Restaurant C", description: "Delicious !" },
        { id: 4, title: "Restaurant D", description: "Delicious !" },
        { id: 5, title: "Restaurant E", description: "Delicious !" },
    ];

    const visibleCards = showAll ? dummyCards : dummyCards.slice(0, 3);

    return (
        <div className="slider">
            {visibleCards.map((card) => (
                <div key={card.id} className="card">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RestaurantSlider;
