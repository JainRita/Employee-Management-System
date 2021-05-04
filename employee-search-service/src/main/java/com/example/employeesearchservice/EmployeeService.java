package com.example.employeesearchservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public String addEmployee(Employee emp) {
		employeeRepository.save(emp);
		return "Success";
	}
	
	public Employee getById(int id) {
		Employee emp_get = employeeRepository.findById(id).orElse(null);
		return emp_get;
	}
	
	public Employee updateEmployee(int id, Employee employee) {
		Employee emp_update = employeeRepository.findById(id).orElse(null);
		emp_update.setName(employee.getName());
		emp_update.setSalary(employee.getSalary());
		return employeeRepository.save(emp_update);
	}
	public List<Employee> viewAll(){
		List<Employee> emp_get_all = employeeRepository.findAll();
		return emp_get_all;
	}
	
	public void deleteEmployee(int id) {
		Employee emp_delete = employeeRepository.findById(id).orElse(null);
		employeeRepository.delete(emp_delete);
		System.out.println("Deleting Employee" + id);
	}
}
