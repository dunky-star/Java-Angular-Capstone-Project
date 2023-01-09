package com.dunky.simplilearn.dto;

import lombok.Getter;
import lombok.Setter;

@Setter

@Getter
public class PurchaseResponse {

    private final String orderTrackingNumber;

    public PurchaseResponse(String orderTrackingNumber) {
        this.orderTrackingNumber = orderTrackingNumber;
    }
}
