package icu.girardtechie.mnschoolreactspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebController {

    @GetMapping({"/","/index"})
    public ModelAndView Index(){
        ModelAndView model = new ModelAndView();
        model.setViewName("index");
        return model;
    }

    @GetMapping("/login")
    public ModelAndView Login(){
        ModelAndView model = new ModelAndView();
        model.setViewName("login");
        return model;
    }

    @GetMapping("/logout")
    public ModelAndView Logout(){
        ModelAndView model = new ModelAndView();
        model.setViewName("logout");
        return model;
    }

    @GetMapping("/expense")
    public ModelAndView Expense(){
        ModelAndView model = new ModelAndView();
        model.setViewName("expense");
        return model;
    }

}
