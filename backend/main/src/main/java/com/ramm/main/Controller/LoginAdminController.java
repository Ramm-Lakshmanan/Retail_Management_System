package com.ramm.main.Controller;

import com.ramm.main.Model.LoginAdminModel;
import com.ramm.main.Model.RegAdminModel;
import com.ramm.main.Service.RegAdminService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/Admin")

public class LoginAdminController {
    private final RegAdminService service2;
    public LoginAdminController(RegAdminService service2) {
        this.service2 = service2;
    }

    @PostMapping("/login")
    public boolean login(@RequestBody LoginAdminModel loginAdminModel){
        RegAdminModel  regAdminModel =service2.getByEmail(loginAdminModel.getEmail());
        if(regAdminModel!=null && regAdminModel.getPassword().equals(loginAdminModel.getPassword())){
            return true;
        }
        return false;
    }
}
