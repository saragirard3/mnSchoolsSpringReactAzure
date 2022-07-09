package icu.girardtechie.mnschoolreactspring.controller;

import icu.girardtechie.mnschoolreactspring.model.*;
import icu.girardtechie.mnschoolreactspring.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestApiController {
    private DistrictService districtService;
    private UserService userService;
    private AdmService admService;
    private ExpenseService expenseService;
    private RevenueService revenueService;

    public RestApiController(DistrictService districtService, UserService userService, AdmService admService, ExpenseService expenseService, RevenueService revenueService) {
        this.districtService = districtService;
        this.userService = userService;
        this.admService = admService;
        this.expenseService = expenseService;
        this.revenueService = revenueService;
    }

    @GetMapping("/revenues")
    public List<Revenue> getAllRevenue(){return revenueService.getAllRevenues();}

    @GetMapping("/expenses")
    public List<Expense> getAllExpense(){return expenseService.getAllExpenses();}
    @GetMapping("/adms")
    public List<Adm> getAllAdm(){return admService.getAllAdm();}
    @GetMapping("/districts")
    public List<District> getAllDistricts(){return districtService.getAllDistricts();}
}
