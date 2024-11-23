package com.example.heukbaekguide.domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.dialect.function.TruncFunction;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Search {

    @Id
    @Column(name = "search_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fileId;

    @Column(nullable = false)
    private String search_term;

    @Column(nullable = false)
    private TruncFunction.DatetimeTrunc search_at;

    @Column(nullable = false)
    private String user_name;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}
