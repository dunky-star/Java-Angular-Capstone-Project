package com.dunky.simplilearn.controller;

import com.dunky.simplilearn.dto.Purchase;
import com.dunky.simplilearn.dto.PurchaseResponse;
import com.dunky.simplilearn.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    // Dependency injection - constructor.
    private CheckoutService checkoutService;

    @Autowired
    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    // API end-point for purchase.
    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        // Delegate call to service
        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        // Returns the REST API.
        return purchaseResponse;
    }

}