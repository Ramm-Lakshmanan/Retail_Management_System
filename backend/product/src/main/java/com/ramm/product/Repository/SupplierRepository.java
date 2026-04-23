package com.ramm.product.Repository;

import com.ramm.product.Model.SupplierModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupplierRepository extends MongoRepository<SupplierModel,Long> {

    List<SupplierModel> findBySupplierName(String name);
}
