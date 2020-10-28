import React from 'react';
import TextField from '@material-ui/core/TextField';


class Register extends React.Component{
       
    render(){
        return (
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="registerCard "> 
                    <form className="d-flex flex-column p-5 w-100 h-100 justify-content-around">
                    <h1 align="center" className="registerTitle" >Register.</h1>
                        <TextField className="" required id="firstname" label="Firstname" />
                        <TextField className="mt-2" required id="lastname" label="Lastname" />
                        <TextField className="mt-2" required type="email" id="email" label="Email address" />
                        <TextField className="mt-2" required id="phone" label="Phone number" />
                        <TextField className="mt-2" required type="password" id="password" label="Password" />
                        <button type="submit" class="btn btn-primary btn-lg landingBtn mt-5" >Register</button>
                    </form>
                </div>    
            </div>
         );
    }
    
}

export default Register;