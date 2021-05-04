import React from 'react';
import {Switch,Route,BrowserRouter as Router } from  'react-router-dom'
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route path = {"/"} exact component = {ListEmployeeComponent} />
              <Route path = {"/employees"} exact component = {ListEmployeeComponent} />
              <Route path = {"/add-employee/:id"} component = {CreateEmployeeComponent}></Route>
              <Route path = {"/view-employee/:id"} component = {ViewEmployeeComponent}></Route>
            </Switch>
          </div> 
          <div className="footer fixed-bottom text-center">
            <FooterComponent />
          </div>
             
      </Router>
    </div>
  );
}

export default App;