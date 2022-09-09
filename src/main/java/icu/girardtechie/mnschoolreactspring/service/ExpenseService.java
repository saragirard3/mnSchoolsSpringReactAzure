package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.Expense;
import icu.girardtechie.mnschoolreactspring.repository.ExpenseRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ExpenseService {
    public List<Expense> getAllExpenses();

    public Expense getExpenseById(Integer id);
    public List<Expense> getExpenseByDistId(Integer distId);
    public List<Expense> getExpenseByDistIdAndFiscalYear(Integer distId, String fiscalYear);

}
