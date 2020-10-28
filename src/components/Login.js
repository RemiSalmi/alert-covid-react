import React from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';


class Login extends React.Component{
       
    render(){
        return (
            <form className="mt-5 d-flex flex-column">
                 <TextField className="mt-2 w-50" required type="email" id="email" label="Email address" />
                 <TextField className="mt-2 w-50" required type="password" id="password" label="Password" />
                 <div className="mt-5">
                    <button type="submit" class="btn btn-primary btn-lg landingBtn" >Login</button>
                    <small className="m-3">Or</small>
                    <NavLink to="/register" className="btn btn-primary btn-lg landingBtn">
                        Register
                    </NavLink> 
                 </div>
                
            </form>
         );
    }
}

export default Login;