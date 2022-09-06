package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.Expense;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ExpenseService {
    public List<Expense> getAllExpenses();

    public Expense getExpenseByDistrictId(@PathVariable Integer distId);

}
