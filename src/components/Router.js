import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Account from './Account';
import Feedback from './Feedback';
import ACBackdrop from './ACBackdrop';



 
class Router extends React.Component{
  render(){
    return (      
      <BrowserRouter>
        <div className="h-100 w-100">
            <Navbar></Navbar>
            <Feedback></Feedback>
            <ACBackdrop></ACBackdrop>
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/register" component={Register} exact/>
              <Route path="/dashboard" component={Dashboard} exact/>
              <Route path="/account" component={Account} exact/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
 
export default Router;