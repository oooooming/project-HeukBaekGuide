package com.example.heukbaekguide.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MenuItem {

    @Id
    @Column(name = "menuItem_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long menuItemId;

    @Column(name = "name", nullable = false)
    private String menuItemName;

    @Column(name = "description")
    private String menuItemDescription;

    @Column(name = "image")
    private String menuItemImage;

    @Column(name = "price")
    private String menuItemPrice;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;
}
