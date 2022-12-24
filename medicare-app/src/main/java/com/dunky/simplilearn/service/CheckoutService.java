package com.dunky.simplilearn.service;

import com.dunky.simplilearn.dto.Purchase;
import com.dunky.simplilearn.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

}
