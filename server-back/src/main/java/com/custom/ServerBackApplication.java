package com.custom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerBackApplication.class, args);
        System.out.println("===========================================");
        System.out.println("Server started successfully on port 3600!");
        System.out.println("===========================================");
    }
}
