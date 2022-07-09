package icu.girardtechie.mnschoolreactspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

    @GetMapping({"/","/index"})
    public ModelAndView Index(){
        ModelAndView model = new ModelAndView();
        model.setViewName("index");
        return model;
    }
}
