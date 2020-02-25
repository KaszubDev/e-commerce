package com.example.ecommerce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Controller
public class EmailController {
    private final EmailSender emailSender;
    private final TemplateEngine templateEngine;

    @Autowired
    public EmailController(EmailSender emailSender, TemplateEngine templateEngine) {
        this.emailSender = emailSender;
        this.templateEngine = templateEngine;
    }

    @RequestMapping("/sendEmail")
    public String send() {

        Context context = new Context();
        context.setVariable("header", "Nowa transakcja na stronie z książkami");
        context.setVariable("title", "Dziękujemy za zakupy na naszej stronie");
        context.setVariable("description", "Odnotowaliśmy nową transację w naszym sklepie.");
        String body = templateEngine.process("template", context);
        emailSender.sendEmail("sklepPP5@gmail.com", "Nowa transakcja w naszym sklepie", body);
        return "index";

    }
}
