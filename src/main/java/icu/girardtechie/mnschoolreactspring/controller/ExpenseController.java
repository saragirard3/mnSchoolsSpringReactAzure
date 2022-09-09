package icu.girardtechie.mnschoolreactspring.controller;

import icu.girardtechie.mnschoolreactspring.model.Expense;
import icu.girardtechie.mnschoolreactspring.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {
    private ExpenseService expenseService;

    // Constructor
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("/")
    public List<Expense> getAllExpense(){return expenseService.getAllExpenses();}

    @GetMapping("/dist")
    public List<Expense> getExpensesByDistId(@RequestParam Integer id){
        return expenseService.getExpenseByDistId(id);
    }

    @GetMapping("/distyear")
    public List<Expense> getExpensesByDistIdAndFiscalYear(@RequestParam Integer id, @RequestParam String year){
        return expenseService.getExpenseByDistIdAndFiscalYear(id,year);
    }

}
