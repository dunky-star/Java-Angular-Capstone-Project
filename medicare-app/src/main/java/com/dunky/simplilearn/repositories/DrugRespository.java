package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.Drug;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface DrugRespository extends JpaRepository<Drug, Long> {
    Page<Drug> findByCategoryId(@Param("id") Long id, Pageable pageable);
    Page<Drug> findByNameContaining(@Param("name") String name, Pageable pageable);
}
