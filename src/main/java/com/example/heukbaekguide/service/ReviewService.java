package com.example.heukbaekguide.service;

import com.example.heukbaekguide.domain.Review;
import com.example.heukbaekguide.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // 사용자별 리뷰 조회
    public List<Review> getReviewsByUserId(Long userId) {
        return reviewRepository.findByUserId(userId);
    }

    // 식당별 전체 리뷰 조회
    public List<Review> getReviewsByRestaurantId(Long restaurantId) {
        return reviewRepository.findByRestaurantId(restaurantId);
    }

    // 리뷰 작성 및 수정
    public Review createOrUpdateReview(Long userId, Long restaurantId, String content, Integer rating) {
        Review review = reviewRepository.findByUserIdAndRestaurantId(userId, restaurantId)
                .orElse(new Review());
        review.setUserId(userId);
        review.setRestaurantId(restaurantId);
        review.setContent(content);
        review.setRating(rating);
        return reviewRepository.save(review);
    }

    // 리뷰 삭제
    public void deleteReview(Long reviewId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new IllegalArgumentException("Review not found with id: " + reviewId));
        reviewRepository.delete(review);
    }
}
