package com.dunky.simplilearn.service;

import com.dunky.simplilearn.dto.Purchase;
import com.dunky.simplilearn.dto.PurchaseResponse;
import com.dunky.simplilearn.entity.User;
import com.dunky.simplilearn.entity.Order;
import com.dunky.simplilearn.entity.OrderItem;
import com.dunky.simplilearn.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    private final UserRepository userRepository;

    // Constructor dependency injection
    @Autowired
    public CheckoutServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {

        // retrieve the order info from dto
        Order order = purchase.getOrder();

        // generate tracking number
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        // populate order with orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        // populate order with billingAddress and shippingAddress
        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        // populate user with order
        User user = purchase.getUser();

        // check if this is an existing user
        String theEmail = user.getEmail();

        User userFromDB = userRepository.findByEmail(theEmail);

        if (userFromDB != null) {
            // we found them ... let's assign them accordingly
            user = userFromDB;
        }
        user.add(order);

        // save to the database
        userRepository.save(user);

        // return a response
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {

        // generate a random UUID number (UUID version-4)
        // For details see: https://en.wikipedia.org/wiki/Universally_unique_identifier
        //
        return UUID.randomUUID().toString();
    }
}
