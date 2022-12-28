package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String theEmail);

    //findBy + fieldName
    Optional<User> findByUsername(String username);
}
