package com.dunky.simplilearn.repositories;


import com.dunky.simplilearn.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}

