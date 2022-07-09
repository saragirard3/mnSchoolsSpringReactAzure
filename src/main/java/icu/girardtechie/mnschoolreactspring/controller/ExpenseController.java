package icu.girardtechie.mnschoolreactspring.controller;

import icu.girardtechie.mnschoolreactspring.model.Expense;
import icu.girardtechie.mnschoolreactspring.repository.ExpenseRepository;
import icu.girardtechie.mnschoolreactspring.service.ExpenseService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller("/expense")
public class ExpenseController {
    private ExpenseService expenseService;

    @GetMapping("/expense")
    public ModelAndView Index(){
        ModelAndView model = new ModelAndView();
        model.setViewName("expense");
        return model;
    }
    public List<Expense> getAllExpense(){return expenseService.getAllExpenses();}
}
