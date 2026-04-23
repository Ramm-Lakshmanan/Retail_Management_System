package com.ramm.product.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Document(collection = "Product")

public class ProductModel {
    @Id
    private Long id;
    private String name;
    private long supplierId;
    private String supplierName;
    private String description;
    private String category;
    private double costPrice;
    private double sellingPrice;
    private int quantity;
    private String imageUrl;
    private boolean available;
}
