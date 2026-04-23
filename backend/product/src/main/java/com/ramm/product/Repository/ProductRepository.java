package com.ramm.product.Repository;

import com.ramm.product.Model.ProductModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel,Long> {

    List<ProductModel> findByCategory(String category);

    ProductModel findProductById(Long id);
}
