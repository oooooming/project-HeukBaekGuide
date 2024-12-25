package com.example.heukbaekguide.controller;

import com.example.heukbaekguide.domain.Review;
import com.example.heukbaekguide.service.ReviewService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    // 사용자별 리뷰 조회
    @GetMapping("/user/{userId}")
    public List<Review> getReviewsByUserId(@PathVariable Long userId) {
        return reviewService.getReviewsByUserId(userId);
    }

    // 식당별 리뷰 조회
    @GetMapping("/restaurant/{restaurantId}")
    public List<Review> getReviewsByRestaurantId(@PathVariable Long restaurantId) {
        return reviewService.getReviewsByRestaurantId(restaurantId);
    }

    // 리뷰 작성 및 수정
    @PostMapping
    public Review createOrUpdateReview(@RequestParam Long userId,
                                       @RequestParam Long restaurantId,
                                       @RequestParam String content,
                                       @RequestParam Integer rating) {
        return reviewService.createOrUpdateReview(userId, restaurantId, content, rating);
    }

    // 리뷰 삭제
    @DeleteMapping("/{reviewId}")
    public void deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
    }
}
