package com.example.heukbaekguide.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MenuItem {

    @Id
    @Column(name = "menuItem_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int menuItemId;

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
