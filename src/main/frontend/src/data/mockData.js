// mockData.js
export const restaurantList = [
    {
        id: 1,
        name: "Restaurant A",
        address: "Seoul, Korea",
        latitude: 37.5665,
        longitude: 126.9780,
        menu: ["Pasta", "Pizza"],
        phone: "010-1234-5678",
        url: "https://restaurant-a.com",
        image: "/images/restaurantA.jpg",
    },
    {
        id: 2,
        name: "Restaurant B",
        address: "Busan, Korea",
        latitude: 35.1796,
        longitude: 129.0756,
        menu: ["Sushi", "Ramen"],
        phone: "010-8765-4321",
        url: "https://restaurant-b.com",
        image: "/images/restaurantB.jpg",
    },
    // 추가 데이터
];

export const top10Restaurants = restaurantList.slice(0, 10);
