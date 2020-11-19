import React from 'react';
import { connect } from "react-redux";
import {sendLocation} from "../actions/locationAction"


class LocationButton extends React.Component{

    handleSendLocation = () =>{
        console.log("getLoc begin")
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log("getting loc")
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
        })

        console.log("get loc end")
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