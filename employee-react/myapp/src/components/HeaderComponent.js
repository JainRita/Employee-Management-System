import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
    
    render() {
        return (
            <div className="container">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark">
                    <div>
                        <h1 className="text-success">  Employee Management System </h1>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
