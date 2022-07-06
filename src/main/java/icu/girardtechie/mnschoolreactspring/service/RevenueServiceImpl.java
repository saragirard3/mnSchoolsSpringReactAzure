package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.Revenue;
import icu.girardtechie.mnschoolreactspring.repository.RevenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RevenueServiceImpl implements RevenueService{
    @Autowired
    RevenueRepository revenueRepository;

    @Override
    public List<Revenue> getAllRevenues() {
        return revenueRepository.findAll();
    }
}
