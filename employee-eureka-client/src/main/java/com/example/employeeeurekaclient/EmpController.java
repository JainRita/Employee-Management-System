package com.example.employeeeurekaclient;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/***
 * Controller class for Employee Management System
 * @author Rita
 *
 */
@RestController
public class EmpController {
	
	@GetMapping("/msg")
	public String sayHello() {
		return "First Eureka CLient";
	}
}
