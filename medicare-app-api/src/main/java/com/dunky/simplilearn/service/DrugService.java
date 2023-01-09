package com.dunky.simplilearn.service;

import com.dunky.simplilearn.entity.Drug;

import java.util.List;

public interface DrugService {
    Drug saveDrug(Drug drug);

    Drug updateDrug(Drug drug);

    void deleteDrug(Long drugId);

    Long numberOfDrugs();

    List<Drug> findAllDrugs();
}
