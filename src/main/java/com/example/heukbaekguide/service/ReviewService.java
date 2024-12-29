package com.example.heukbaekguide.service;

import com.example.heukbaekguide.domain.Restaurant;
import com.example.heukbaekguide.domain.Review;
import com.example.heukbaekguide.domain.User;
import com.example.heukbaekguide.repository.RestaurantRepository;
import com.example.heukbaekguide.repository.ReviewRepository;
import com.example.heukbaekguide.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final RestaurantRepository restaurantRepository;

    public ReviewService(ReviewRepository reviewRepository, UserRepository userRepository, RestaurantRepository restaurantRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.restaurantRepository = restaurantRepository;
    }

    // 사용자별 리뷰 조회
    public List<Review> getReviewsByUserId(Long userId) {
        return reviewRepository.findByUser_UserId(userId);
    }

    // 식당별 전체 리뷰 조회
    public List<Review> getReviewsByRestaurantId(Long restaurantId) {
        return reviewRepository.findByRestaurant_RestaurantId(restaurantId);
    }

    public Review createOrUpdateReview(Long userId, Long restaurantId, String content, Integer rating) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));

        Review review = new Review();
        review.setUser(user);
        review.setRestaurant(restaurant);
        review.setContent(content);
        review.setRating(rating);
        review.setVisitDate(LocalDateTime.now());

        return reviewRepository.save(review);
    }

    // 리뷰 삭제
    public void deleteReview(Long reviewId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new IllegalArgumentException("Review not found with id: " + reviewId));
        reviewRepository.delete(review);
    }
}
