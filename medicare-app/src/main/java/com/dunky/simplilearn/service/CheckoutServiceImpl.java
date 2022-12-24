package com.dunky.simplilearn.service;

import com.dunky.simplilearn.dto.Purchase;
import com.dunky.simplilearn.dto.PurchaseResponse;
import org.springframework.stereotype.Service;

@Service
public class CheckoutServiceImpl implements CheckoutService{
    @Override
    public PurchaseResponse placeOrder(Purchase purchase) {
        return null;
    }
}
