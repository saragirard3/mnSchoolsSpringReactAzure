package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.model.User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface UserService {

    public User addUser(User user);
    public List<User> getAllUsers();
    public User getUserById(@PathVariable Integer id);
    public String deleteUser(@PathVariable Integer id);
    User updateUser(@RequestBody User newUser, @PathVariable Integer id);
}
