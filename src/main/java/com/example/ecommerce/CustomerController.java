package com.example.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path = "/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewCustomer (@RequestParam String name, @RequestParam String surname, @RequestParam String email){

        Customer customer = new Customer();
        customer.setEmail(email);
        customer.setName(name);
        customer.setSurname(surname);

        customerRepository.save(customer);
        return ("Saved");
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable <Customer> getAllCustomers() {
        return customerRepository.findAll();
    }


    @GetMapping(path = "/ID={id}")
    public @ResponseBody
    Optional findById(@PathVariable Integer id){
        return customerRepository.findById(id);
    }
}
