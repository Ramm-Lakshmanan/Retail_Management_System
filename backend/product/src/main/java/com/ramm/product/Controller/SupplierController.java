package com.ramm.product.Controller;

import com.ramm.product.Model.SupplierModel;
import com.ramm.product.Service.SupplierService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/Supplier")

public class SupplierController {
    private final SupplierService service;
    public SupplierController(SupplierService service) {
        this.service = service;
    }

    @GetMapping("/report")
    public List<SupplierModel> report(){
        return service.getAll();
    }

    @GetMapping("/monthlyReport/{month}")
    public List<SupplierModel> monthlyReport(@PathVariable int month){
        return service.getReportByMonth(month);
    }

    @GetMapping("/annualReport/{year}")
    public List<SupplierModel> annualReport(@PathVariable int year){
        return service.getReportByYear(year);
    }

    @GetMapping("/supplierReport/{name}")
    public List<SupplierModel> supplierReport(@PathVariable String name){
        return service.getReportBySupplier(name);
    }
}
