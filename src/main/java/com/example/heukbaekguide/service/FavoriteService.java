package com.example.heukbaekguide.service;

import com.example.heukbaekguide.domain.Favorite;
import com.example.heukbaekguide.domain.Restaurant;
import com.example.heukbaekguide.domain.User;
import com.example.heukbaekguide.repository.FavoriteRepository;
import com.example.heukbaekguide.repository.RestaurantRepository;
import com.example.heukbaekguide.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;
    private final RestaurantRepository restaurantRepository;
    private final UserRepository userRepository;

    public Favorite addFavorite(Long userId, Long restaurantId) {
        User user = userRepository.findByUserId(userId);
        Restaurant restaurant = restaurantRepository.findByRestaurantId(restaurantId);
        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setRestaurant(restaurant);
        return favoriteRepository.save(favorite);
    }

    public List<Favorite> getFavoriteList(Long userId) {
        User user = userRepository.findByUserId(userId); // User를 ID로 조회
        if (user == null) {
            throw new IllegalArgumentException("User not found with ID: " + userId);
        }
        return favoriteRepository.findByUser(user.getUserid()); // 조회된 User 객체 전달
    }

    public void deleteFavorite(Long favoriteId) {
        favoriteRepository.deleteById(favoriteId);
    }
}