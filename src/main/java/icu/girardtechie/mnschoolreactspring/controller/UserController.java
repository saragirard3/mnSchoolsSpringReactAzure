package icu.girardtechie.mnschoolreactspring.controller;

import icu.girardtechie.mnschoolreactspring.model.User;
import icu.girardtechie.mnschoolreactspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/adduser")
    public String add(@RequestBody User user){
        userService.addUser(user);
        return "New User Added";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){return userService.getAllUsers();}

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }

//    @PutMapping("/user/{id}")
//    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
//        return userRepository.findById(id)
//                .map(user -> {
//                    user.setUsername(newUser.getUsername());
//                    user.setName(newUser.getName());
//                    user.setEmail(newUser.getEmail());
//                    return userRepository.save(user);
//                }).orElseThrow(() -> new UserNotFoundException(id));
//    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Integer id){
        return userService.deleteUser(id);
    }
}
