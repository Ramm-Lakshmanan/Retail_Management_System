package com.ramm.main.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Customer")
public class CustomerModel {
    @Id
    private long phoneNumber;
    private String name;
}
