import React, { Component } from 'react';
import './App.scss';
import { Route, Switch,BrowserRouter } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          </Switch>
      </BrowserRouter>
    
      
    );
  }
}

export default App;
