package com.ramm.product.Controller;

import com.ramm.product.Model.ProductModel;
import com.ramm.product.Model.SupplierModel;
import com.ramm.product.Service.ProductService;
import com.ramm.product.Service.SupplierService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/Products")

public class ProductController {
    private final ProductService service;
    private final SupplierService supplierService;
    public ProductController(ProductService service,SupplierService supplierService) {
        this.service = service;
        this.supplierService = supplierService;
    }

    @PostMapping("/add")
    public ProductModel addProduct(@RequestBody ProductModel product) {
        SupplierModel model=new SupplierModel(product.getSupplierId(),product.getSupplierName(),product.getId(),product.getName(),product.getCostPrice(),product.getQuantity());
        supplierService.add(model);
        return service.add(product);
    }

    @GetMapping("/viewAllProducts")
    public List<ProductModel> viewAllProducts() {return service.getAll();}

    @GetMapping("/viewByCategory/{category}")
    public List<ProductModel> viewByCategory(@PathVariable String category) {
        return service.getByCategory(category);
    }

    @PutMapping("/updateProductPrice/{id}/{costPrice}/{sellingPrice}")
    public ProductModel updateProductPrice(@PathVariable Long id, @PathVariable Double costPrice,@PathVariable Double sellingPrice) {
        return service.updateProduct(id,costPrice,sellingPrice);
    }

    @PutMapping("/updateStock/{id}/{quantity}")
    public ProductModel updateStock(@PathVariable Long id, @PathVariable int quantity) {
        return service.updateStock(id,quantity);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public void deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
    }
}

