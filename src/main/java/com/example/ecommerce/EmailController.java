package com.example.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.Optional;

@Controller
public class EmailController {
    private final EmailSender emailSender;
    private final TemplateEngine templateEngine;

    @Autowired
    public EmailController(EmailSender emailSender, TemplateEngine templateEngine) {
        this.emailSender = emailSender;
        this.templateEngine = templateEngine;
    }

    @Autowired
    private CustomerRepository customerRepository;

    @RequestMapping("/sendEmail/{id}")
    public String send(@PathVariable Integer id) {

        Optional<Customer> customer = customerRepository.findById(id);

        String name = customer.get().getName();
        String surName = customer.get().getSurname();
        String email = customer.get().getEmail();

        Context context = new Context();
        context.setVariable("header", "Nowa transakcja na stronie z książkami");
        context.setVariable("title", "Witaj " + name + " " + surName + "! Dziękujemy za zakupy na naszej stronie.");
        context.setVariable("description", " Cieszymy się że jesteś na nami. Odnotowaliśmy nową transakcję na koncie " + email + ".");
        String body = templateEngine.process("template", context);
        emailSender.sendEmail("sklepPP5@gmail.com", "", body);
        return "template";

    }
}
