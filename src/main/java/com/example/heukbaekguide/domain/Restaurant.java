package com.example.heukbaekguide.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Restaurant {

    @Id
    @Column(name = "restaurant_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long restaurantId;

    @Column(name = "name", nullable = false)
    private String restaurantName;

    @Column(name = "address", nullable = false)
    private String restaurantAddress;

    @Column(name = "phone")
    private String restaurantPhone;

    @Column(name = "url")
    private String restaurantURL;

    @Column(name = "location")
    private String restaurantLocation;

    @Column(name = "average_rating")
    private String restaurantAverageRating;

    @Column(name = "review_count")
    private String restaurantReviewCount;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MenuItem> menuItems;

    public Restaurant(Long restaurantId) {
        this.restaurantId = restaurantId;
    }

}
