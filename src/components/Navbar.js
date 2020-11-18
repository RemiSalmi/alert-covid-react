import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import {logout, getConnectedUser} from "../actions/userAction"
import {OpenFeedback} from "../actions/feedbackAction"

class Navbar extends React.Component{

    componentDidMount(){
        this.props.dispatch(getConnectedUser())
    }

    logout = () =>{
        sessionStorage.removeItem('token')
        this.props.dispatch(logout())
        this.props.dispatch(OpenFeedback("success","Logout successful !"))
    }
       
    render(){
        return (
            <ul className="navigation__container navbar">
                <div>
                    <NavLink to="/" className="navLogo">
                        Alert <span>Covid.</span>
                    </NavLink> 
                    {
                        this.props.connectedUser !== null ?   (<NavLink to="/dashboard" className="navLink  ml-3">Dashboard</NavLink>):(null) 
                    }
                    
                </div>
                
                {
                    this.props.connectedUser !== null ? 
                    (
                        <div>
                            <NavLink to="/account" className="navLink mr-3">My account</NavLink>
                            <NavLink to="/" className="navLink mr-4 redHover" onClick={this.logout}>Logout</NavLink>
                        </div>
                    ):(null)
                }

            </ul>
         );
    }
    
}

const mapStateToProps = (state) => ({
    connectedUser: state.user.connectedUser,
    loading: state.user.loading,
    loginErrorMessage: state.user.messageError,
});

export default connect(mapStateToProps)(Navbar);