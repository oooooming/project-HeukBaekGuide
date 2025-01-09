package com.example.heukbaekguide.controller;

import com.example.heukbaekguide.domain.Favorite;
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

    @PostMapping("/add") // 즐겨찾기 추가
    public ResponseEntity<Favorite> addFavorite(@RequestParam Long userId, @RequestParam Long restaurantId) {
        if (userId == null || restaurantId == null) {
            return ResponseEntity.badRequest().body(null);
        }
        Favorite favorite = favoriteService.addFavorite(userId, restaurantId);
        return ResponseEntity.ok(favorite);
    }

    @GetMapping("/list") // 즐겨찾기 리스트 조회
    public ResponseEntity<List<Favorite>> getFavoriteList(@RequestParam Long userId) {
        List<Favorite> favoriteList = favoriteService.getFavoriteList(userId);
        if (favoriteList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(favoriteList);
    }

    @DeleteMapping("/delete") // 즐겨찾기 삭제
    public ResponseEntity<String> deleteFavorite(@RequestParam Long favoriteId) {
        favoriteService.deleteFavorite(favoriteId);
        return ResponseEntity.ok("Favorite deleted successfully.");
    }
}
