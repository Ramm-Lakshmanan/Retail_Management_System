package com.ramm.product.Service;

import com.ramm.product.Model.SupplierModel;
import com.ramm.product.Repository.SupplierRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {
    private final SupplierRepository repo;
    public SupplierService(SupplierRepository repo) {
        this.repo = repo;
    }

    public void add(SupplierModel model) {
        repo.save(model);
    }

    public List<SupplierModel> getAll() {
        return repo.findAll();
    }

    public List<SupplierModel> getReportByMonth(int month) {
        List<SupplierModel> req=repo.findAll();
        req.removeIf(s -> s.getCreatedAt().getMonthValue() != month);
        return req;
    }

    public List<SupplierModel> getReportByYear(int year) {
        List<SupplierModel> ans=repo.findAll();
        ans.removeIf(s->s.getCreatedAt().getYear()!=year);
        return ans;
    }

    public List<SupplierModel> getReportBySupplier(String name) {
        return repo.findBySupplierName(name);
    }
}
