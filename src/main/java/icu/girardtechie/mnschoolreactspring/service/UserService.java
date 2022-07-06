package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.User;

import java.util.List;

public interface UserService {

    public User addUser(User user);
    public List<User> getAllUsers();

}
