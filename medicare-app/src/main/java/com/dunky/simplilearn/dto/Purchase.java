package com.dunky.simplilearn.dto;

import com.dunky.simplilearn.entity.Address;
import com.dunky.simplilearn.entity.Customer;
import com.dunky.simplilearn.entity.Order;
import com.dunky.simplilearn.entity.OrderItem;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
