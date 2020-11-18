import React from 'react';
import { connect } from "react-redux";
import {imPositive} from "../actions/positiveAction"


class PositiveButton extends React.Component{

    positive = () =>{
        console.log("positive")
        this.props.dispatch(imPositive(this.props.connectedUser.id_user))
    }
       
    render(){
        return (
            <button onClick={this.positive} class="btn btn-primary btn-lg landingBtn ml-3" >I'm positive</button>
         );
    }
    
}
const mapStateToProps = (state) => ({
    connectedUser: state.user.connectedUser,
});

export default connect(mapStateToProps)(PositiveButton);