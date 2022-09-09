package icu.girardtechie.mnschoolreactspring.repository;

import icu.girardtechie.mnschoolreactspring.model.Revenue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RevenueRepository<R> extends JpaRepository<Revenue, Integer> {

    List<Revenue> findByDistId(Integer distId);
    List<Revenue> findByDistIdAndFiscalYear(Integer distId, String fiscalYear);
}
