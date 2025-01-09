package com.example.heukbaekguide.controller;

import com.example.heukbaekguide.domain.Visit;
import com.example.heukbaekguide.service.VisitService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/visits")
public class VisitController {
    private final VisitService visitService;

    @GetMapping("/{userId}")
    public List<Visit> getVisits(@PathVariable Long userId) {

        return visitService.getVisitsByUserId(userId);
    }
}
