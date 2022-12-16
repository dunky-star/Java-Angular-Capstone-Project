package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.Drug;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrugRespository extends JpaRepository<Drug, Long> {
}
