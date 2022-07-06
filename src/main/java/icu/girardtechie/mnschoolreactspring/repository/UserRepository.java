package icu.girardtechie.mnschoolreactspring.repository;

import icu.girardtechie.mnschoolreactspring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
