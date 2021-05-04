package com.example.employeeeurekaclient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EmployeeEurekaClientApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeEurekaClientApplication.class, args);
	}

}
