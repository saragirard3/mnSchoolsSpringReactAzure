package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.exceptions.DistrictNotFoundException;
import icu.girardtechie.mnschoolreactspring.exceptions.UserNotFoundException;
import icu.girardtechie.mnschoolreactspring.model.Expense;
import icu.girardtechie.mnschoolreactspring.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense getExpenseByDistrictId(@PathVariable Integer distId) {
        return expenseRepository.findById(distId)
                .orElseThrow(() -> new DistrictNotFoundException(distId));
    }


}
