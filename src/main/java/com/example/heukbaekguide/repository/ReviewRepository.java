package com.example.heukbaekguide.repository;

import com.example.heukbaekguide.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByUser_UserId(Long userId);
    List<Review> findByRestaurant_RestaurantId(Long restaurantId);
    Optional<Review> findByUser_UserIdAndRestaurant_RestaurantId(Long userId, Long restaurantId);
    Optional<Review> findById(Long reviewId);
}
