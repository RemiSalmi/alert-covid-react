import React from 'react';
import { connect } from "react-redux";
import {sendLocation} from "../actions/locationAction"
import {OpenFeedback} from "../actions/feedbackAction"

function showError(error){
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.")
        break;
    }
} 

class LocationButton extends React.Component{
    

    handleSendLocation = () =>{
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition((position) =>{
                let latitude = position.coords.latitude
                let longitude = position.coords.longitude
    
                console.log(latitude)
                console.log(longitude)
    
                let location = {
                    id_user : this.props.connectedUser.id_user,
                    latitude : latitude,
                    longitude : longitude,
                    date : Date.now()
                }
                this.props.dispatch(sendLocation(location))
            },
            (error) =>{
                switch(error.code) {
                  case error.PERMISSION_DENIED:
                    console.log("User denied the request for Geolocation.")
                    break;
                  case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.")
                    break;
                  case error.TIMEOUT:
                    console.log("The request to get user location timed out.")
                    break;
                  case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.")
                    break;
            }
            });
        }
        else {
            console.log("Not Available");
            this.props.dispatch(OpenFeedback("error","Locaion is not available in your browser"))
        }
        
    }
       
    render(){
        return (
            <button onClick={this.handleSendLocation} className="btn btn-primary btn-lg locationBtn" >Send my location</button>
         );
    }
    
}
const mapStateToProps = (state) => ({
    locations: state.location.locations,
    locationsload: state.location.loading,
    connectedUser: state.user.connectedUser,
});
export default connect(mapStateToProps)(LocationButton);