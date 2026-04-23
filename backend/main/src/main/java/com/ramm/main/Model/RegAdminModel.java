package com.ramm.main.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Admin")
public class RegAdminModel {
    @Id
    private String email;
    private String name;
    private String password;
}
