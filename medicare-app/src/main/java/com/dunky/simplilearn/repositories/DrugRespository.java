package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.Drugs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrugRespository extends JpaRepository<Drugs, Long> {
}
