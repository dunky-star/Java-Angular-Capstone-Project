package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.DrugCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrugCategoryRepository extends JpaRepository<DrugCategory, Long> {
}
