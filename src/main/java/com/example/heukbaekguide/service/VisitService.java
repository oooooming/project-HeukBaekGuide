package com.example.heukbaekguide.service;

import com.example.heukbaekguide.domain.Visit;
import com.example.heukbaekguide.repository.VisitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class VisitService {
    private final VisitRepository visitRepository;

    public List<Visit> getVisitsByUserId(Long userId) {
        return visitRepository.findByUser_UserId(userId);
    }
}
