package com.example.heukbaekguide.data;

import com.example.heukbaekguide.domain.Restaurant;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Component
public class RestaurantLocation {

    @PersistenceContext
    private EntityManager entityManager;

    @PostConstruct
    @Transactional
    public void insertData() {
        Restaurant[] restaurants = {
                new Restaurant(null, "식당 네오", "서울 송파구 삼전로12길 4 101호", "070-4212-5212", null, "37.5064178,127.0911156", null, null, null),
                new Restaurant(null, "쵸이닷", "서울특별시 강남구 도산대로 457 앙스돔빌딩 3층", "02-518-0318", "https://app.catchtable.co.kr/ct/shop/choidot?from=share&type=VISIT_RESERVATION", "37.5243614,127.0465901", null, null, null),
                new Restaurant(null, "티엔미미(홍대점)", "서울특별시 마포구 양화로 144 머큐어앰버서더 호텔 L층", "01088231070", "https://app.catchtable.co.kr/ct/shop/tianmimihongdae", "37.5553209,126.922401", null, null, null),
                new Restaurant(null, "파브리키친", "서울 용산구 한강대로15길 23-6 1층", "070-7576-4830", null, "37.5261486,126.9627509", null, null, null),
                new Restaurant(null, "홍보각", "서울 강남구 봉은사로 130 노보텔 앰배서더 강남 LL층", "0507-1381-6479", "https://app.catchtable.co.kr/ct/shop/hongbogak?type=DINING", "37.5053029,127.0288672", null, null, null),
                new Restaurant(null, "에빗", "서울 강남구 도산대로45길 10-5 1층 EVETT", "0507-1399-1029", "https://www.restaurantevett.com/", "37.5233493,127.0362087", null, null, null),
                new Restaurant(null, "친밀 & 오팬파이어", "제주 제주시 조천읍 남조로 1781 1층", "0507-1372-6806", null, "33.4287647,126.6744441", null, null, null),
                new Restaurant(null, "터치 더 스카이", "서울 영등포구 63로 50 한화금융센터_63", "0507-1337-5761", "https://www.instagram.com/63_restaurant/", "37.5205886,126.9395995", null, null, null),
                new Restaurant(null, "모리노아루요", "제주 제주시 애월읍 하소로 769-58 모리노아루요", "0507-1377-4253", "https://www.instagram.com/morino_aruyo", "33.4193673,126.4015222", null, null, null),
                new Restaurant(null, "로컬릿", "서울 성동구 한림말길 33 2층", "0507-1354-3399", "https://www.instagram.com/the_local_eater", "37.5409203,127.0147439", null, null, null),
                new Restaurant(null, "가매일식", "광주 서구 상무대로 1104-26", "062-352-7711", "http://www.gamajp.com/", "35.1525653,126.8838538", null, null, null),
                new Restaurant(null, "오쁘띠베르", "서울 종로구 자하문로 47-1 1층 카페", "0507-1320-7569", "https://www.instagram.com/auxpetitsverres", "37.5802195,126.9709642", null, null, null),
                new Restaurant(null, "비채나", "서울 송파구 올림픽로 300 롯데월드타워 81층", "02-3213-1261", "https://www.bicena.com/", "37.5126072,127.1025386", null, null, null),
                new Restaurant(null, "네기다이닝라운지", "서울 강남구 도산대로15길 18 4층 네기다이닝라운지", "02-548-0807", "https://app.catchtable.co.kr/ct/shop/negitong", "37.5195017,127.0240624", null, null, null),
                new Restaurant(null, "리북방", "서울 마포구 마포대로1길 16 2층 리북방", "0507-1421-2347", "https://app.catchtable.co.kr/ct/shop/leebukbang", "37.5396867,126.9431899", null, null, null),
                new Restaurant(null, "윤서울", "서울 강남구 선릉로 805 1층", "0507-1350-3323", "https://app.catchtable.co.kr/ct/shop/yunseoul", "37.5236843,127.0389911", null, null, null),
                new Restaurant(null, "진진", "서울 마포구 월드컵북로1길 60 1층 진진", "0507-1447-8879", "https://pf.kakao.com/_xifMGb", "37.5538,126.918437", null, null, null),
                new Restaurant(null, "즐거운 술상", "서울 도봉구 노해로 341 117호 창동, 신원리베르텔", "010-7539-2020", null, "37.6548,127.0292", null, null, null),
                new Restaurant(null, "안동집 손칼국시", "서울 동대문구 고산자로36길 3 신관 지하1층", "02-965-3948", null, "37.5748,127.0375", null, null, null),
                new Restaurant(null, "비아 톨레도 파스타바", "서울특별시 용산구 원효로83길 7-2 1층", "0507-1384-0986", "https://app.catchtable.co.kr/ct/shop/viatoledo", "37.5332,126.9654", null, null, null),
                new Restaurant(null, "도량", "서울 종로구 자하문로6길 6 2, 3층", "0507-1432-0210", "https://app.catchtable.co.kr/ct/shop/dolyang?from=share&type=WAITING://", "37.5771,126.9732", null, null, null),
                new Restaurant(null, "포노부오노", "서울 강남구 도산대로45길 8-7 2층", "0507-1361-4501", "https://app.catchtable.co.kr/ct/shop/ponobouno", "37.5203,127.0221", null, null, null),
                new Restaurant(null, "야키토리 묵", "서울 마포구 성미산로 165-1 1층 우측", "0507-1405-2840", "https://catchtable.co.kr/yakitorimook", "37.5523,126.9221", null, null, null),
                new Restaurant(null, "에다마메", "서울 용산구 한강대로76길 11-40 1층/남영동 97-5", "070-8866-1140", "https://app.catchtable.co.kr/ct/shop/edamame", "37.5321,126.9812", null, null, null),
                new Restaurant(null, "을지로 보석", "서울 중구 마른내로 11-10 3층/저동2가 84-11", "063-9070-7070", "https://app.catchtable.co.kr/ct/shop/euljiloboseog", "37.5641,126.9867", null, null, null),
                new Restaurant(null, "마마리 마켓", "서울 성동구 연무장18길 16 1층 마마리마켓/성수동2가 256-3", "0507-1383-2163", "https://www.instagram.com/mamaleemarket/", "37.5482,127.0378", null, null, null),
                new Restaurant(null, "부토", "서울 용산구 한남대로27가길 32 지2층/한남동 729-91", "02-6052-7785", "https://www.instagram.com/buto_hannam/", "37.5203,127.0221", "", "", null),
                new Restaurant(null, "남영탉", "서울 용산구 한강대로80길 12 1층/남영동 94-1", "070-8733-5949", "https://www.instagram.com/nychicken.kr/", "37.5321,126.9812", "", "", null),
                new Restaurant(null, "디핀", "서울 중구 퇴계로 411 1층 디핀/흥인동 63", "02-3298-5046", "https://www.instagram.com/deepin_seoul/#", "37.5641,126.9867", "", "", null),
                new Restaurant(null, "조광", "서울 송파구 새말로8길 13 2층", "0507-1392-0503", "https://www.instagram.com/cho__kwang/", "37.5109,127.1056", "", "", null),
                new Restaurant(null, "띵스 버거", "서울 성동구 고산자로8길 20 1층 띵스버거", "0507-1470-2410", "https://www.instagram.com/chefshawnpark", "37.5489,127.0375", "", "", null),
                new Restaurant(null, "군몽", "서울 용산구 한남대로27가길 15 2층 군몽", "070-8287-0437", "https://www.instagram.com/guunmong.seoul/?igshid=ZmVmZTY5ZGE%3D", "37.5203,127.0221", "", "", null),
                new Restaurant(null, "본연", "서울 강남구 논현로 742 7층", "0507-1434-0923", "https://catchtable.co.kr/bornyon", "37.5182921,127.0291463", "", "", null),
                new Restaurant(null, "나우 남영", "서울 용산구 원효로89길 23 2층", "0507-1346-0639", "https://www.instagram.com/nawoo_more.better/#", "37.5332,126.9654", "", "", null),
                new Restaurant(null, "트리드", "서울 강남구 선릉로162길 16 2층", "02-512-8312", "https://www.instagram.com/tridseoul", "37.4978,127.0275", "", "", null)
        };


        for (Restaurant restaurant : restaurants) {
            entityManager.persist(restaurant);
        }

        System.out.println("데이터 삽입 성공!");
    }
}
