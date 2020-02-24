package com.example.ecommerce;

import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import java.sql.Date;
import java.util.Optional;

@Controller
@RequestMapping("/purchase")
public class PurchaseController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewOrder (@RequestParam Integer customerID, @RequestParam Integer itemID, Date date) {


        Purchase purchase = new Purchase();
        purchase.setCustomerID(customerID);
        purchase.setItemID(itemID);
        purchase.setDate(date);

        orderRepository.save(purchase);
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Purchase> getAllOrders(){
        return orderRepository.findAll();
    }

    @GetMapping(path = "/ID={id}")
    public @ResponseBody Optional findById(@PathVariable Integer id){
        return orderRepository.findById(id);
    }
}
