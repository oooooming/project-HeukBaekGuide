package com.example.heukbaekguide.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Visit {

    @Id
    @Column(name = "visit_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long visitId;

    @Column(name = "visit_date", nullable = false)
    private LocalDateTime visitDate;

    @OneToOne
    @JoinColumn(name = "review_id", nullable = false) // 외래 키 매핑
    private Review review;

    @ManyToOne
    @JoinColumn(name = "user_id")  // 'user_id'는 외래 키 컬럼명
    private User user;
}
