package com.dunky.simplilearn.service;

import com.dunky.simplilearn.entity.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);

    User updateUser(User user);

    void deleteUser(Long userId);

    User findByUsername(String username);

    List<User> findAllUsers();

    Long numberOfUsers();
}
