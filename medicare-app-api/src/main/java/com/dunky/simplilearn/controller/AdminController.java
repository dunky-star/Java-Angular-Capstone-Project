package com.dunky.simplilearn.controller;

import com.dunky.simplilearn.entity.Drug;
import com.dunky.simplilearn.entity.StringResponse;
import com.dunky.simplilearn.entity.User;
import com.dunky.simplilearn.service.DrugService;
import com.dunky.simplilearn.service.TransactionService;
import com.dunky.simplilearn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {
    @Autowired
    private UserService userService;

    @Autowired
    private DrugService drugService;

    @Autowired
    private TransactionService transactionService;

    // To update a user by an Admin.
    @PutMapping("/api/admin/user-update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        User existUser = userService.findByUsername(user.getUsername());
        if (existUser != null && !existUser.getId().equals(user.getId())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(userService.updateUser(user), HttpStatus.CREATED);
    }

    // This can be also @DeleteMapping.
    @PostMapping("/api/admin/user-delete")
    public ResponseEntity<?> deleteUser(@RequestBody User user){
        userService.deleteUser(user.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // To get all users by an Admin.
    @GetMapping("/api/admin/user-all")
    public ResponseEntity<?> findAllUsers(){
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/api/admin/user-number")
    public ResponseEntity<?> numberOfUsers(){
        Long number = userService.numberOfUsers();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        //to return it, we will use String Response because long is not a suitable response for rest api
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // To create a product.
    @PostMapping("/api/admin/drug-create")
    public ResponseEntity<?> createDrug(@RequestBody Drug drug){
        return new ResponseEntity<>(drugService.saveDrug(drug), HttpStatus.CREATED);
    }

    // To update a product.
    @PutMapping("/api/admin/drug-update")
    public ResponseEntity<?> updateDrug(@RequestBody Drug drug){
        return new ResponseEntity<>(drugService.updateDrug(drug), HttpStatus.CREATED);
    }

    //This can be also @DeleteMapping.
    @PostMapping("/api/admin/drug-delete")
    public ResponseEntity<?> deleteDrug(@RequestBody Drug drug){
        drugService.deleteDrug(drug.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/api/admin/drug-all")
    public ResponseEntity<?> findAllDrugs(){
        return new ResponseEntity<>(drugService.findAllDrugs(), HttpStatus.OK);
    }

    @GetMapping("/api/admin/drug-number")
    public ResponseEntity<?> numberOfDrugs(){
        Long number = drugService.numberOfDrugs();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/api/admin/transaction-all")
    public ResponseEntity<?> findAllTransactions(){
        return new ResponseEntity<>(transactionService.findAllTransactions(), HttpStatus.OK);
    }

    @GetMapping("api/admin/transaction-number")
    public ResponseEntity<?> numberOfTransactions(){
        Long number = transactionService.numberOfTransactions();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
