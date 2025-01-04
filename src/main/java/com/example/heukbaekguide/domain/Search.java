package com.example.heukbaekguide.domain;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.dialect.function.TruncFunction;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Search {

    @Id
    @Column(name = "search_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long searchId;

    @Column(nullable = false)
    private String search_term;

    @Column(nullable = false)
    private LocalDateTime searchAt;

    @Column(nullable = false)
    private String user_name;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}