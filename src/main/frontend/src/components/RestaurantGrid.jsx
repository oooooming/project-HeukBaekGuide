import React from "react";
import "./RestaurantGrid.css";

const RestaurantGrid = () => {
    const restaurantList = [
        { id: 1, title: "Restaurant A", description: "Delicious !" },
        { id: 2, title: "Restaurant B", description: "Delicious !" },
        { id: 3, title: "Restaurant C", description: "Delicious !" },
        { id: 4, title: "Restaurant D", description: "Delicious !" },
        { id: 5, title: "Restaurant E", description: "Delicious !" },
        { id: 6, title: "Restaurant F", description: "Delicious !" },
        { id: 7, title: "Restaurant G", description: "Delicious !" },
    ];

    return (
        <div className="grid">
            {restaurantList.map((restaurant) => (
                <div key={restaurant.id} className="grid-item">
                    <h3>{restaurant.title}</h3>
                    <p>{restaurant.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RestaurantGrid;
