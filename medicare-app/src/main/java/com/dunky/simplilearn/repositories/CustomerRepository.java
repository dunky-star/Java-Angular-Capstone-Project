package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
