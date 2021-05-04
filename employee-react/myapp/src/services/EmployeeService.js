import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:1234/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        console.log("url"+ EMPLOYEE_API_BASE_URL + `/${employeeId}`);
        return axios.get(EMPLOYEE_API_BASE_URL + `/${employeeId}`);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + `/${employeeId}`, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + `/delete/${employeeId}`);
    }
}

export default new EmployeeService();