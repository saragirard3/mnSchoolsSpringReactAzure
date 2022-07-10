package icu.girardtechie.mnschoolreactspring.service;

import icu.girardtechie.mnschoolreactspring.exceptions.UserNotFoundException;
import icu.girardtechie.mnschoolreactspring.model.User;
import icu.girardtechie.mnschoolreactspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user){ return userRepository.save(user); }

    @Override
    public List<User> getAllUsers() { return userRepository.findAll(); }

    @Override
    public User getUserById(@PathVariable Integer id){
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public User updateUser(@RequestBody User currentUser, @PathVariable Integer id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirstName(currentUser.getFirstName());
                    user.setLastName(currentUser.getLastName());
                    user.setEmail(currentUser.getEmail());
                    user.setDistId(currentUser.getDistId());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public String deleteUser(@PathVariable Integer id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }
}
