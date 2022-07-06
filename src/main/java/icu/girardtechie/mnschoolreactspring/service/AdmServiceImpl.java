package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.Adm;
import icu.girardtechie.mnschoolreactspring.repository.AdmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmServiceImpl implements AdmService {

    @Autowired
    AdmRepository admRepository;

    @Override
    public List<Adm> getAllAdm() {
        return admRepository.findAll();
    }
}
