package com.example.heukbaekguide.repository;

import com.example.heukbaekguide.domain.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VisitRepository extends JpaRepository<Visit, Long> {
    List<Visit> findByUser_UserId(Long userId);
}
