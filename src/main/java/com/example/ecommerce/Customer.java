package com.example.ecommerce;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer customerID;

    private String name;
    private String surname;
    private String email;

    @OneToMany
    private Collection<Purchase> purchases = new ArrayList<>();

    public Customer(){
    }

    public Integer getCustomerID() {
        return customerID;
    }

    public void setCustomerID(Integer customerID) {
        this.customerID = customerID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
