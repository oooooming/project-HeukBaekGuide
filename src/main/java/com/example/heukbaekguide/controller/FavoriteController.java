package com.example.heukbaekguide.controller;

import com.example.heukbaekguide.domain.Favorite;
import com.example.heukbaekguide.domain.User;
import com.example.heukbaekguide.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/favorites")
public class FavoriteController {
    private final FavoriteService favoriteService;

    @PostMapping("/add")
    public ResponseEntity<Favorite> addFavorite(Long userId, Long restaurantId) {
        Favorite favorite = favoriteService.addFavorite(userId, restaurantId);
        return ResponseEntity.ok(favorite);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Favorite>> getFavoriteList(Long userId) {
        User user = new User();
        user.setUserId(userId);
        List<Favorite> favoriteList = favoriteService.getFavoriteList(user);
        return ResponseEntity.ok(favoriteList);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Favorite> deleteFavorite(Long favoriteId) {
        favoriteService.deleteFavorite(favoriteId);
        return ResponseEntity.noContent().build();
    }
}
