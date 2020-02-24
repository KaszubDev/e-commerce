package com.example.ecommerce;

import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository <Item, Integer> {
}
