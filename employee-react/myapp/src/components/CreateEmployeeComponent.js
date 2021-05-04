import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            eid: this.props.match.params.id,
            id: '',
            name: '',
            salary:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeeIdHandler = this.changeeIdHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){
        if(this.state.eid === '_add'){
            return
        }else{
            let empid= this.state.eid;
            EmployeeService.getEmployeeById(empid).then( (res) =>{
                let employee = res.data;
                console.log(JSON.stringify(employee));
                this.setState({
                    id: employee.id,
                    name: employee.name,
                    salary : employee.salary
                });
            });
        }        
    }
    
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, id: this.state.id, salary: this.state.salary};

        if(this.state.eid === '_add'){          
            EmployeeService.createEmployee(employee).then(res =>{              
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {         
                this.props.history.push('/employees');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }

    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.eid === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Employee id: </label>
                                        <input placeholder="Employee Id" name="id" className="form-control" 
                                            value={this.state.id} onChange={this.changeeIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Employee Name: </label>
                                        <input placeholder="Name" name="name" className="form-control" 
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                            
                                    <div className = "form-group">
                                        <label> Employee Salary: </label>
                                        <input placeholder="Salary" name="salary" className="form-control" 
                                            value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
