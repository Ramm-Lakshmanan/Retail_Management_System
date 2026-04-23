package com.ramm.product.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "Supplier")

public class SupplierModel {
    @Id
    private long supplierId;
    private String supplierName;
    private Long productId;
    private String productName;
    private int quantity;
    private double costPrice;
    private LocalDate createdAt;

    public SupplierModel(long supplierId, String supplierName, Long productId, String productName, double costPrice,int quantity) {
        this.supplierId = supplierId;
        this.supplierName = supplierName;
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.costPrice = costPrice;
        this.createdAt = LocalDate.now();
    }
}
