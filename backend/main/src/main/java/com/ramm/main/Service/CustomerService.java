package com.ramm.main.Service;

import com.ramm.main.DTO.ProductDTO;
import com.ramm.main.Model.CustomerModel;
import com.ramm.main.Repository.CustomerRepository;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository repo;
    private final RestTemplate restTemplate;

    private final String PRODUCT_SERVICE_URL = "http://localhost:8081/api/Products";

    public CustomerService(CustomerRepository repo, RestTemplate restTemplate) {
        this.repo = repo;
        this.restTemplate = restTemplate;
    }

    public List<ProductDTO> getByCategory(String category) {
        String url = PRODUCT_SERVICE_URL + "/viewByCategory/" + category;

        return restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<ProductDTO>>() {}
        ).getBody();
    }

}