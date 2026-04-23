package com.ramm.main.Repository;

import com.ramm.main.Model.RegAdminModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RegAdminRepository extends MongoRepository<RegAdminModel,Long> {

    RegAdminModel findByEmail(String email);
}
