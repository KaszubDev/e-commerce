package com.example.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@Controller
@RequestMapping(path = "/item")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewItem(@RequestParam String title, @RequestParam String author, @RequestParam Float price, String picture) {

        Item item = new Item();
        item.setAuthor(author);
        item.setTitle(title);
        item.setPrice(price);
        item.setPicture(picture);

        itemRepository.save(item);
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable <Item> getAllItems(){
        return itemRepository.findAll();
    }


    @GetMapping(path = "/ID={id}")
    public @ResponseBody
    Optional findById(@PathVariable Integer id){
        return itemRepository.findById(id);
    }
}
