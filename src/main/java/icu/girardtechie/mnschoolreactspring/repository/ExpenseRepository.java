package icu.girardtechie.mnschoolreactspring.repository;

import icu.girardtechie.mnschoolreactspring.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Repository
public interface ExpenseRepository<E> extends JpaRepository<Expense,Integer> {
    List<Expense> findByDistId(Integer distId);
    List<Expense> findByDistIdAndFiscalYear(Integer distId, String fiscalYear);




}
