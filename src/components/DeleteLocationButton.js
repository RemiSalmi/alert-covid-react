import React from 'react';
import { connect } from "react-redux";
import {deleteLocation} from "../actions/locationAction"


class DeleteLocationButton extends React.Component{

    handleDeleteLocation = () =>{ 
        console.log(this.props.location)   
        console.log(this.props.locIndex)
        this.props.dispatch(deleteLocation(this.props.location,this.props.locIndex))
        if(this.props.closePopup !== undefined){
            this.props.closePopup()
        }
    }
       
    render(){
        return (
            <button onClick={this.handleDeleteLocation} class="btn btn-danger btn-sm " >Delete</button>
         );
    }
    
}
const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps)(DeleteLocationButton);