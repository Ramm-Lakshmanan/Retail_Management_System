package com.ramm.main.Controller;

import com.ramm.main.DTO.ProductDTO;
import com.ramm.main.Service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/Customer")
public class CustomerController {

    private final CustomerService service;

    public CustomerController(CustomerService service) {
        this.service = service;
    }

    @GetMapping("/viewProducts/{category}")
    public List<ProductDTO> viewProducts(@PathVariable String category) {
        return service.getByCategory(category);
    }
}