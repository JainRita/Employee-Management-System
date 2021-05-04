package com.example.employeeconfigserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class EmployeeconfigserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeconfigserverApplication.class, args);
	}

}
