import React from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {login} from '../actions/userAction'
import { connect } from "react-redux";
import {OpenFeedback} from "../actions/feedbackAction"

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          username: null,
          password : null,
        };
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    };

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    handleClickLogin = (e) =>{
        e.preventDefault()
        if(this.state.username !== null && this.state.password !== null && this.state.username !== "" && this.state.password !== ""){
            let user = {
                username : this.state.username,
                password : this.state.password
            }
            
            this.props.dispatch(login(user));
            this.setState({ username: "" });
            this.setState({ password: "" });
        }else{
            this.props.dispatch(OpenFeedback("error","Username and password can't be empty !"))
        }
        
    }
       
    render(){
        return (
            <form className="mt-5 d-flex flex-column" autoComplete="off">
                 <TextField onChange={this.handleChangeUsername} value={this.state.username} className="mt-2 w-50" required type="email" id="email" label="Email address" />
                 <TextField onChange={this.handleChangePassword} value={this.state.password} className="mt-2 w-50" required type="password" id="password" label="Password" />
                 <div className="mt-5">
                    <button type="submit" onClick={this.handleClickLogin} class="btn btn-primary btn-lg landingBtn" >Login</button>
                    <small className="m-3">Or</small>
                    <NavLink to="/register" className="btn btn-primary btn-lg landingBtn">
                        Register
                    </NavLink> 
                 </div>
            </form>
         );
    }
}

const mapStateToProps = (state) => ({
    connectedUser: state.user.connectedUser,
    loading: state.user.loading,
});

export default connect(mapStateToProps)(Login);