package com.example.ecommerce;

import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository <Purchase, Integer> {
}
