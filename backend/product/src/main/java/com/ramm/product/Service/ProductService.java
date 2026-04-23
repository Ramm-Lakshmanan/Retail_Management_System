package com.ramm.product.Service;

import com.ramm.product.Model.ProductModel;
import com.ramm.product.Repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ProductService {
    private final ProductRepository repo;
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public ProductModel add(ProductModel product) {
        return repo.save(product);
    }

    public List<ProductModel> getAll() {
        return repo.findAll();
    }

    public List<ProductModel> getByCategory(String category) {
        List<ProductModel> all= repo.findByCategory(category);
        all.removeIf(product -> !product.isAvailable());
        return all;
    }

    public ProductModel updateProduct(Long id, Double costPrice, Double sellingPrice) {
        ProductModel product=repo.findProductById(id);
        product.setCostPrice(costPrice);
        product.setSellingPrice(sellingPrice);
        return repo.save(product);
    }

    public ProductModel updateStock(Long id, int quantity) {
        ProductModel product=repo.findProductById(id);
        if(product!=null) {
            if(product.getQuantity()==quantity){
                product.setQuantity(0);
                product.setAvailable(false);
            }
            else{
                product.setQuantity(product.getQuantity()+quantity);
                product.setAvailable(true);
            }
            return repo.save(product);
        }
        return null;
    }

    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }
}
