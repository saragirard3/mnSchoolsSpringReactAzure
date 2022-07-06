package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.User;
import icu.girardtechie.mnschoolreactspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user){ return userRepository.save(user); }

    @Override
    public List<User> getAllUsers() { return userRepository.findAll(); }
}
