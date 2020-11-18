import React from 'react';
import TextField from '@material-ui/core/TextField';
import {register} from '../actions/userAction'
import { connect } from "react-redux";
import {OpenFeedback} from "../actions/feedbackAction"


class Register extends React.Component{

    componentDidUpdate(prevProps){
        if (prevProps.userCreated !== this.props.userCreated) {
            if(this.props.userCreated === true){
                this.props.history.push("/")
            }
          }
    }

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname : "",
            email : "",
            phone : "",
            password : "",
            password2 : ""
        };
    }

    handleChangeFirstname = (e) => {
        this.setState({ firstname: e.target.value });
    };

    handleChangeLastname = (e) => {
        this.setState({ lastname: e.target.value });
    };

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    handleChangePhone = (e) => {
        this.setState({ phone: e.target.value });
    };

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    handleChangePassword2 = (e) => {
        this.setState({ password2: e.target.value });
    };

    register = (e) =>{
        e.preventDefault()
        if(this.state.email !== "" && this.state.firstname !== "" && this.state.lastname !== "" && this.state.phone !== "" && this.state.password !== "" && this.state.password2 !== "" ){
            if(this.state.password === this.state.password2){
                let user = {
                    "email" : this.state.email,
                    "firstname" : this.state.firstname,
                    "lastname" : this.state.lastname,
                    "phone" : this.state.phone,
                    "password" : this.state.password
                }
                this.props.dispatch(register(user));
            }else{
                this.props.dispatch(OpenFeedback("error","Passwords not matching"))
            }
        }else{
            this.props.dispatch(OpenFeedback("error","You have to fill every fields"))
        }
    }
       
    render(){
        return (
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="registerCard "> 
                    <form className="d-flex flex-column p-5 w-100 h-100 justify-content-around">
                    <h1 align="center" className="registerTitle" >Register.</h1>
                        <TextField onChange={(this.handleChangeFirstname)} value={this.state.firstname} className="" required id="firstname" label="Firstname" />
                        <TextField onChange={(this.handleChangeLastname)} value={this.state.lastname} className="mt-2" required id="lastname" label="Lastname" />
                        <TextField onChange={(this.handleChangeEmail)} value={this.state.email} className="mt-2" required type="email" id="email" label="Email address" />
                        <TextField onChange={(this.handleChangePhone)} value={this.state.phone} className="mt-2" required id="phone" label="Phone number" />
                        <TextField onChange={(this.handleChangePassword)} value={this.state.password} className="mt-2" required type="password" id="password" label="Password" />
                        <TextField onChange={(this.handleChangePassword2)} value={this.state.password2} className="mt-2" required type="password" id="password2" label="Retype password" />
                        <button type="submit" onClick={this.register} class="btn btn-primary btn-lg landingBtn mt-5" >Register</button>
                    </form>
                </div>    
            </div>
         );
    }
    
}
const mapStateToProps = (state) => ({
    loading: state.user.loading,
    userCreated: state.user.created,
    loginErrorMessage: state.user.messageError,
});

export default connect(mapStateToProps)(Register);