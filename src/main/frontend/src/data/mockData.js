// 사용자 더미 데이터
export const mockUser = {
    email: "test00@test.com",
    password: "test123", // 실제 비밀번호가 아닌 테스트용 데이터
    name: "Test User",
};

// 전체 레스토랑 리스트 더미 데이터
const mockRestaurantList = [
    {
        id: 1,
        name: "레스토랑1",
        address: "서울시 강남구",
        phone: "02-1234-5678",
        image: "/images/rest1.png", // 로컬 이미지 파일 경로
        menu: ["메뉴1", "메뉴2"], // 제공 메뉴 리스트
        url: "http://restaurant1.com", // 레스토랑 홈페이지 URL
    },
    {
        id: 2,
        name: "레스토랑2",
        address: "서울시 서초구",
        phone: "02-5678-1234",
        image: "/images/rest1.png",
        menu: ["메뉴A", "메뉴B"],
        url: "http://restaurant2.com",
    },
    {
        id: 3,
        name: "레스토랑3",
        address: "서울시 강남구",
        phone: "02-1234-5678",
        image: "/images/rest1.png", // 로컬 이미지 파일 경로
        menu: ["메뉴1", "메뉴2"], // 제공 메뉴 리스트
        url: "http://restaurant1.com", // 레스토랑 홈페이지 URL
    },
    {
        id: 4,
        name: "레스토랑4",
        address: "서울시 서초구",
        phone: "02-5678-1234",
        image: "/images/rest1.png",
        menu: ["메뉴A", "메뉴B"],
        url: "http://restaurant2.com",
    },
    {
        id: 5,
        name: "레스토랑5",
        address: "서울시 강남구",
        phone: "02-1234-5678",
        image: "/images/rest1.png", // 로컬 이미지 파일 경로
        menu: ["메뉴1", "메뉴2"], // 제공 메뉴 리스트
        url: "http://restaurant1.com", // 레스토랑 홈페이지 URL
    },
    {
        id: 6,
        name: "레스토랑6",
        address: "서울시 강남구",
        phone: "02-1234-5678",
        image: "/images/rest1.png", // 로컬 이미지 파일 경로
        menu: ["메뉴1", "메뉴2"], // 제공 메뉴 리스트
        url: "http://restaurant1.com", // 레스토랑 홈페이지 URL
    },
    {
        id: 7,
        name: "레스토랑7",
        address: "서울시 강남구",
        phone: "02-1234-5678",
        image: "/images/rest1.png", // 로컬 이미지 파일 경로
        menu: ["메뉴1", "메뉴2"], // 제공 메뉴 리스트
        url: "http://restaurant1.com", // 레스토랑 홈페이지 URL
    },
    {
        id: 8,
        name: "레스토랑8",
        address: "서울시 강남구",
        phone: "02-1234-5678",
        image: "/images/rest1.png", // 로컬 이미지 파일 경로
        menu: ["메뉴1", "메뉴2"], // 제공 메뉴 리스트
        url: "http://restaurant1.com", // 레스토랑 홈페이지 URL
    },
    {
        id: 9,
        name: "레스토랑9",
        address: "서울시 강남구",
        phone: "02-1234-5678",
        image: "/images/rest1.png", // 로컬 이미지 파일 경로
        menu: ["메뉴1", "메뉴2"], // 제공 메뉴 리스트
        url: "http://restaurant1.com", // 레스토랑 홈페이지 URL
    }
];

export default mockRestaurantList;

// 좋아요 목록에 추가된 레스토랑 더미 데이터
export const mockLikedRestaurants = [
    {
        name: "Restaurant A",
        image: "/images/rest1.png",
        address: "123 Main St, Seoul",
        url: "http://restaurant-a.com",
    },
    {
        name: "Restaurant B",
        image: "/images/rest1.png",
        address: "456 Elm St, Busan",
        url: "http://restaurant-b.com",
    },
];

// 방문한 레스토랑 데이터 (날짜 및 리뷰 포함)
export const mockVisitedRestaurants = [
    {
        name: "Restaurant X",
        image: "/images/rest1.png",
        visitedDate: "2024-10-29", // 방문 날짜
        rating: 4, // 별점
        review: "맛있다", // 리뷰
    },
    {
        name: "Restaurant Y",
        image: "/images/rest1.png",
        visitedDate: "2024-11-15",
        rating: 5,
        review: "맛있어",
    },
];