import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { connect } from "react-redux";
import DeleteLocationButton from './DeleteLocationButton';
import {getContactLocation} from "../actions/contactLocationAction"


class Map extends React.Component{

    componentDidMount(){
        this.props.dispatch(getContactLocation())
    }

    constructor(props) {
        super(props);
        this.state = {
          viewport: {
              latitude :43.604508,
              longitude:3.870981,
              zoom : 10,
              height : "100%",
              width : "100%"

          },
          selectedLocation : null,
          selectedIndex : null,
          realoadMarker : false
        };
    }

    handleClickPosition = (location, index, type) =>{
        location.type = type
        this.setState({selectedLocation:location})
        this.setState({selectedIndex:index})
    }

    closePopup = () =>{
        this.setState({selectedLocation : null})
        this.setState({selectedIndex : null})
    }

   
    render(){
        let loc = this.props.locations
        
        return (
            <ReactMapGL {... this.state.viewport} mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN} onViewportChange={viewport =>{
                this.setState({viewport:viewport})
            }}>
                {
                    loc.map((location, index) =>{
                        
                        return(
                            <Marker latitude={location.latitude} longitude={location.longitude} offsetTop={-30} offsetLeft={-11.25}>
                                <i class="fas fa-map-marker-alt" style={{color:"green",fontSize:"30px",cursor:"pointer"}} onClick={()=>{this.handleClickPosition(location,index,"classique")}}></i>
                            </Marker>
                        )
                    })     
                }
                {
                    this.props.contactLocations.map((location, index) =>{
                        return(
                            <Marker latitude={location.latitude} longitude={location.longitude} offsetTop={-30} offsetLeft={-11.25}>
                                <i class="fas fa-map-marker-alt" style={{color:"red",fontSize:"30px",cursor:"pointer"}} onClick={()=>{this.handleClickPosition(location,index,"contact")}}></i>
                            </Marker>
                        )
                    })
                }
                {
                    this.state.selectedLocation ? (
                        <Popup latitude={this.state.selectedLocation.latitude} longitude={this.state.selectedLocation.longitude} closeOnClick={false} onClose={this.closePopup}>
                            <div className="d-flex flex-column">
                                {this.state.selectedLocation.type === "contact" ? (<span class="badge badge-pill badge-danger d-table mt-3">Positive contact</span>  ):(<span class="badge badge-pill badge-success d-table mt-3">Safe</span>  )}
                                <span>Latitude : {this.state.selectedLocation.latitude}</span>
                                <span>Longitude : {this.state.selectedLocation.longitude}</span>    
                                <span>Le {new Date(this.state.selectedLocation.date).toLocaleString()}</span>
                                {this.state.selectedLocation.type === "contact" ? (null):(<DeleteLocationButton location={this.state.selectedLocation} locIndex={this.state.selectedIndex} closePopup={this.closePopup}></DeleteLocationButton>)}
                            </div>
                        </Popup>
                    ) : null
                }
                    
            </ReactMapGL>
        );
    }
    
}

const mapStateToProps = (state) => ({
    locations: state.location.locations,
    locationsLoading : state.location.loading,
    contactLocations : state.contactLocation.locations,
    contactLocationsLoading : state.contactLocation.loading,
});

export default connect(mapStateToProps)(Map);