package icu.girardtechie.mnschoolreactspring.repository;

import icu.girardtechie.mnschoolreactspring.model.Adm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdmRepository extends JpaRepository<Adm, Integer> {
}
