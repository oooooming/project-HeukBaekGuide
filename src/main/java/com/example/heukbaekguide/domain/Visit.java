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
    @Column(name = "review_id", nullable = false)
    private Review review;
}
