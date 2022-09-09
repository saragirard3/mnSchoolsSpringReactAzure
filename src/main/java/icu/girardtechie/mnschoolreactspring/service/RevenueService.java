package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.Expense;
import icu.girardtechie.mnschoolreactspring.model.Revenue;

import java.util.List;

public interface RevenueService {
    public List<Revenue> getAllRevenues();
    public List<Revenue> getRevenueByDistId(Integer distId);
    public List<Revenue> getRevenueByDistIdAndFiscalYear(Integer distId, String fiscalYear);
}
