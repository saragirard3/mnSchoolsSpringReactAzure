package icu.girardtechie.mnschoolreactspring.repository;

import icu.girardtechie.mnschoolreactspring.model.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DistrictRepository extends JpaRepository<District,Integer> {

}
