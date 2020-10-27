import React from 'react';
import { NavLink } from 'react-router-dom';


class Login extends React.Component{
       
    render(){
        return (
            <form className="mt-5">
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control w-50" id="email" aria-describedby="email"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control w-50" id="password"/>
                </div>
                <button type="submit" class="btn btn-primary btn-lg landingBtn" >Login</button>
                <small className="m-3">Or</small>
                <NavLink to="/register" className="btn btn-primary btn-lg landingBtn">
                    Register
                </NavLink> 
            </form>
         );
    }
}

export default Login;