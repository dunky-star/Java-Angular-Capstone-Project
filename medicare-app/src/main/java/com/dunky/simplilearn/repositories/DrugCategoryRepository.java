package com.dunky.simplilearn.repositories;

import com.dunky.simplilearn.entity.DrugCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "drugCategory", path = "drug-category")
public interface DrugCategoryRepository extends JpaRepository<DrugCategory, Long> {
}
