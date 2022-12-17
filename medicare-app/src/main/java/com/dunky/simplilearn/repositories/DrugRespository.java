package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.Drug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin("http://localhost:4200")
public interface DrugRespository extends JpaRepository<Drug, Long> {
}
