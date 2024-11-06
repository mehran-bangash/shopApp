package com.example;

import javax.persistence.*;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String product;
    private int quantity;
    private double price;

    // Getters and setters
}