package com.dunky.simplilearn.controller;

import com.dunky.simplilearn.entity.Role;
import com.dunky.simplilearn.entity.User;
import com.dunky.simplilearn.service.DrugService;
import com.dunky.simplilearn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private DrugService drugService;

    //@Autowired
    //private TransactionService transactionService;

    // User registration controller
    @PostMapping("/api/user/registration")
    public ResponseEntity<?> register(@RequestBody User user){
        if(userService.findByUsername(user.getUsername())!=null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        //default role.
        user.setRole(Role.USER);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    // User login controller
    @GetMapping("/api/user/login")
    public ResponseEntity<?> getUser(Principal principal){
        if(principal == null || principal.getName()==null){
            //logout will also use here, so we should return ok http status.
            return ResponseEntity.ok(principal);
        }

        return new ResponseEntity<>(userService.findByUsername(principal.getName()), HttpStatus.OK);

    }

    /**
    @PostMapping("/api/user/purchase")
    public ResponseEntity<?> purchaseProduct(@RequestBody Transaction transaction){
        transaction.setPurchaseDate(LocalDateTime.now());
        transactionService.saveTransaction(transaction);
        return new ResponseEntity<>(transaction, HttpStatus.CREATED);
    }*/

    // For users to list all medicines/drugs on the medicare site.
    @GetMapping("/api/user/drugs")
    public ResponseEntity<?> getAllDrugs(){
        return new ResponseEntity<>(drugService.findAllDrugs(), HttpStatus.OK);
    }

}

