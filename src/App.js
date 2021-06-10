import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import {resetLocal} from './utils/index';





class App extends Component {

    


  render() {
    return (
      <BrowserRouter>
          <input type="button" value="RESET" onClick={resetLocal}/>
          <Switch>
            <div className="login-container">
                <div className="login-panel">
          <PublicRoute restricted={true} component={SignIn} path="/" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
                </div>
            </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
