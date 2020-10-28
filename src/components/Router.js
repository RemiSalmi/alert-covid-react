import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Register from './Register';
import Navbar from './Navbar';



 
class Router extends React.Component{
  render(){
    return (      
      <BrowserRouter>
        <div className="h-100 w-100">
            <Navbar></Navbar>
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/register" component={Register} exact/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}
 
export default Router;