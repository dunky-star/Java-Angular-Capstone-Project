package com.dunky.simplilearn.service;

import com.dunky.simplilearn.entity.Drug;
import com.dunky.simplilearn.repositories.DrugRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
//It is not necessary. You can use it, if you have multiple database operation in a single service method.
public class DrugServiceImpl implements DrugService{

    @Autowired
    private DrugRespository drugRepository;

    @Override
    public Drug saveDrug(final Drug drug){
        drugRepository.save(drug);
        return drug;
    }

    @Override
    public Drug updateDrug(final Drug drug){
        return drugRepository.save(drug);
    }

    @Override
    public void deleteDrug(final Long drugId){
        drugRepository.deleteById(drugId);
    }

    @Override
    public Long numberOfDrugs(){
        return drugRepository.count();
    }

    @Override
    public List<Drug> findAllDrugs(){
        return drugRepository.findAll();
    }

}
