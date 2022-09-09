package icu.girardtechie.mnschoolreactspring.controller;

import icu.girardtechie.mnschoolreactspring.model.Revenue;
import icu.girardtechie.mnschoolreactspring.service.RevenueService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/revenues")
public class RevenueController {
    private RevenueService revenueService;

    public RevenueController(RevenueService revenueService) {
        this.revenueService = revenueService;
    }

    @GetMapping("/")
    public List<Revenue> getAllRevenues(){
        return revenueService.getAllRevenues();
    }

    @GetMapping("/dist")
    public List<Revenue> getRevenuesByDistId(@RequestParam Integer id){
        return revenueService.getRevenueByDistId(id);
    }

    @GetMapping("/distyear")
    public List<Revenue> getRevenuesByDistIdAndFiscalYear(@RequestParam Integer id, @RequestParam String year){
        return revenueService.getRevenueByDistIdAndFiscalYear(id, year);
    }
}
