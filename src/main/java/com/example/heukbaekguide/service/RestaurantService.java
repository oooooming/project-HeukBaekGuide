package com.example.heukbaekguide.service;

import com.example.heukbaekguide.domain.Restaurant;
import com.example.heukbaekguide.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;

    // 모든 식당 조회
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    // 특정 식당 상세 조회
    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Restaurant not found with id: " + id));
    }
}
