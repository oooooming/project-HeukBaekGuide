package com.example.heukbaekguide.repository;

import com.example.heukbaekguide.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByUserId(Long userId);
    List<Review> findByRestaurantId(Long restaurantId);
    Optional<Review> findByUserIdAndRestaurantId(Long userId, Long restaurantId);
    Optional<Review> findById(Long reviewId);
}
