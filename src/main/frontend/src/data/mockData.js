// 사용자 더미 데이터
export const mockUser = {
    email: "test00@test.com",
    password: "test123", // 실제 비밀번호가 아닌 테스트용 데이터
    name: "Test User",
};

// 전체 레스토랑 리스트 더미 데이터
const mockRestaurantList = [
    {
        "id": 1,
        "name": "윤서울",
        "address": "서울특별시 강남구 선릉로 805 1층",
        "phone": "02-1234-5678",
        "menu": ["한식 코스 요리", "계절별 특선 메뉴"],
        "url": "http://yoonseoul.com"
    },
    {
        "id": 2,
        "name": "아루요",
        "address": "제주특별자치도 제주시 애월읍 유수암평화5길 15-8",
        "phone": "064-123-4567",
        "menu": ["제주 특산물 요리", "파인 다이닝 코스"],
        "url": "http://aruyojeju.com"
    },
    {
        "id": 3,
        "name": "로컬릿",
        "address": "서울특별시 성동구 한림말길 33 2층",
        "phone": "02-9876-5432",
        "menu": ["채식주의자 메뉴", "로컬 재료를 활용한 요리"],
        "url": "http://localeat.com"
    },
    {
        "id": 4,
        "name": "오쁘띠베르",
        "address": "서울특별시 종로구 자하문로 47-1",
        "phone": "02-3456-7890",
        "menu": ["프랑스 가정식", "디저트 스페셜"],
        "url": "http://aupetitvert.com"
    },
    {
        "id": 5,
        "name": "비채나",
        "address": "서울특별시 송파구 올림픽로 300 롯데월드타워 81층",
        "phone": "02-1234-0000",
        "menu": ["모던 한식", "프리미엄 코스 요리"],
        "url": "http://bichena.com"
    },
    {
        "id": 6,
        "name": "홍보각",
        "address": "서울특별시 강남구 봉은사로 130 노보텔 앰배서더 강남 LL층",
        "phone": "02-5678-1234",
        "menu": ["정통 중식 요리", "딤섬 스페셜"],
        "url": "http://hongbogak.com"
    },
    {
        "id": 7,
        "name": "친밀",
        "address": "제주특별자치도 제주시 조천읍 남조로 1781",
        "phone": "064-234-5678",
        "menu": ["제주식 다이닝", "신선한 해산물 요리"],
        "url": "http://chinmeal.com"
    },
    {
        "id": 8,
        "name": "에빗",
        "address": "서울특별시 강남구 도산대로45길 10-5 1층",
        "phone": "02-8765-4321",
        "menu": ["컨템포러리 요리", "셰프 추천 코스"],
        "url": "http://evett.com"
    },
    {
        "id": 9,
        "name": "쵸이닷",
        "address": "서울특별시 강남구 도산대로 457 3층",
        "phone": "02-2345-6789",
        "menu": ["이탈리안 퀴진", "파스타 스페셜"],
        "url": "http://choidot.com"
    },
    {
        "id": 10,
        "name": "진진",
        "address": "서울특별시 마포구 월드컵북로1길 60 1층",
        "phone": "02-3456-7890",
        "menu": ["모던 중식", "시그니처 요리"],
        "url": "http://jinjin.com"
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