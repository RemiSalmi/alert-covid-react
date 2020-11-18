import React from 'react';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';

class Account extends React.Component{
   
    render(){
        return (
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="registerCard "> 
                    <form className="d-flex flex-column p-5 w-100 h-100 justify-content-around">    
                    <h1 align="center" className="registerTitle" >My Account.</h1>
                    {
                        this.props.connectedUser !== null ?
                        (
                            <div className="flex-column d-flex">
                                <TextField  value={this.props.connectedUser.firstname} className="maj" disabled  id="firstname" label="Firstname" />
                                <TextField  value={this.props.connectedUser.lastname} className="mt-2 maj" disabled  id="lastname" label="Lastname" />
                                <TextField  value={this.props.connectedUser.email} className="mt-2"  disabled type="email" id="email" label="Email address" />
                                <TextField  value={this.props.connectedUser.phone} className="mt-2"  disabled id="phone" label="Phone number" />
                            </div>   
                        ):(null)
                    }
                    </form>
                </div>    
            </div>
         );
    }
    
}
const mapStateToProps = (state) => ({
    connectedUser: state.user.connectedUser,
    loading: state.user.loading,
    loginErrorMessage: state.user.messageError,
});

export default connect(mapStateToProps)(Account);