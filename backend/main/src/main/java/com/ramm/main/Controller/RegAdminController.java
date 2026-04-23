package com.ramm.main.Controller;

import com.ramm.main.Model.RegAdminModel;
import com.ramm.main.Service.RegAdminService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/Admin")

public class RegAdminController {
    private final RegAdminService service;
    public RegAdminController(RegAdminService service){this.service=service;}

    @PostMapping("/register")
    public RegAdminModel register(@RequestBody RegAdminModel regAdminModel){
        return service.register(regAdminModel);
    }
}
