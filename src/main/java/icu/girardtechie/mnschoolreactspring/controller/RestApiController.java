package icu.girardtechie.mnschoolreactspring.controller;

import icu.girardtechie.mnschoolreactspring.model.*;
import icu.girardtechie.mnschoolreactspring.service.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestApiController {
    private DistrictService districtService;
    private AdmService admService;

    public RestApiController(DistrictService districtService, AdmService admService) {
        this.districtService = districtService;
        this.admService = admService;

    }

    @GetMapping("/adms")
    public List<Adm> getAllAdm(){return admService.getAllAdm();}
    @GetMapping("/districts")
    public List<District> getAllDistricts(){return districtService.getAllDistricts();}
}
