package com.ramm.main.Service;

import com.ramm.main.Model.RegAdminModel;
import com.ramm.main.Repository.RegAdminRepository;
import org.springframework.stereotype.Service;

@Service

public class RegAdminService {
    private final RegAdminRepository repo;
    public RegAdminService(RegAdminRepository repo) {this.repo=repo;}

    public RegAdminModel register(RegAdminModel regAdminModel) {
        return repo.save(regAdminModel);
    }
    public RegAdminModel getByEmail(String email){
        return repo.findByEmail(email);
    }
}
