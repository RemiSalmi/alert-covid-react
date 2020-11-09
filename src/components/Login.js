import React from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {login, resetMessageError} from '../actions/userAction'
import { connect } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          username: null,
          password : null,
          openError : false,
          messageError : null
        };
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    };

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    handleCloseLocalError = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({
            openError: false
        })
    };

    handleCloseLoginError = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.props.dispatch(resetMessageError());
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
            this.setState({ openError: true });
            this.setState({ messageError: "Email and password can't be empty" });
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

                 <Snackbar open={this.state.openError} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={this.handleCloseLocalError}>
                    <Alert onClose={this.handleCloseLocalError} severity="error">
                        {this.state.messageError}
                    </Alert>
                </Snackbar>
                <Snackbar open={this.props.loginErrorMessage !== null} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={this.handleCloseLoginError}>
                    <Alert onClose={this.handleCloseLoginError} severity="error">
                        {this.props.loginErrorMessage === undefined ? ("Problème de connexion avec le serveur"):(this.props.loginErrorMessage)}
                    </Alert>
                </Snackbar>
            </form>
         );
    }
}

const mapStateToProps = (state) => ({
    connectedUser: state.user.connectedUser,
    loading: state.user.loading,
    loginErrorMessage: state.user.messageError,
});

export default connect(mapStateToProps)(Login);