package com.example.heukbaekguide.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Visit {

    @Id
    @Column(name = "vitit_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long visitId;

    @Column(name = "visit_date", nullable = false)
    private LocalDateTime visitDate;

    @OneToOne
    @Column(name = "review_id", nullable = false)
    private Review review;
}
