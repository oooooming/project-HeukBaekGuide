package com.example.heukbaekguide.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "searches") // 테이블 이름을 명시적으로 지정
public class Search {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "search_id", nullable = false)
    private Long searchId; // 필드 이름 수정

    @Column(nullable = false)
    private String searchTerm; // 필드 이름 수정 (카멜 케이스 사용)

    @Column(name = "search_at", nullable = false)
    private LocalDateTime searchAt; // 날짜/시간 타입으로 수정

    @Column(nullable = false)
    private String userName; // 필드 이름 수정 (카멜 케이스 사용)

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
