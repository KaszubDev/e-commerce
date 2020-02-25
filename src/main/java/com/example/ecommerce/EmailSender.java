package com.example.ecommerce;

public interface EmailSender {
    void sendEmail(String to, String subject, String content);
}
