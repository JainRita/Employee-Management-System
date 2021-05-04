package com.example.employeesearchservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/msg")
	public String sayHello() {
		return "Hello Rita";
	}
	
	@PostMapping("/employees")
	public String addEmployee(@RequestBody Employee emp) {
		return employeeService.addEmployee(emp);
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployee(@PathVariable("id") int id) {
		return employeeService.getById(id);
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable("id") int id, @RequestBody Employee employee) {
		return employeeService.updateEmployee(id, employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> viewAll(){
		return employeeService.viewAll();
	}
	
	@DeleteMapping("/employees/delete/{id}")
	public List<Employee> deleteEmployee(@PathVariable("id") int id) {
		employeeService.deleteEmployee(id);
		return viewAll();
	}
}
