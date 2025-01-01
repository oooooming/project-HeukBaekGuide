package com.example.heukbaekguide.domain;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Review {

    @Id
    @Column(name = "review_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private Integer rating;

    @Column(name = "visit_date", nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime visitDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // 외래 키 매핑
    private User user;

    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false) // 외래 키 매핑
    private Restaurant restaurant;

    @OneToOne(mappedBy = "review") // Visit에서 매핑됨
    private Visit visit;

    public void setUserId(Long userId) {
        this.user = user;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurant = restaurant;
    }
}