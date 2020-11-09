import React from 'react';


class LocationButton extends React.Component{

    sendLocation = () =>{
        
        navigator.geolocation.getCurrentPosition((position)=>{
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude

            console.log(latitude)
            console.log(longitude)
        })

        
    }
       
    render(){
        return (
            <button onClick={this.sendLocation} class="btn btn-primary btn-lg locationBtn" >Send my location</button>
         );
    }
    
}

export default LocationButton;