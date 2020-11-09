import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'


class Map extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          viewport: {
              latitude :43.604508,
              longitude:3.870981,
              zoom : 13,
              height : "100%",
              width : "100%"

          },
          
        };
    }
   
    render(){
        return (
            <ReactMapGL {... this.state.viewport} mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN} onViewportChange={viewport =>{
                this.setState({viewport:viewport})
            }}>
                {this.props.locations.map(location =>{
                    <Marker latitude={location.latitude} longitude={location.longitude}>
                        <div></div>
                    </Marker>
                })}
            </ReactMapGL>
        );
    }
    
}

export default Map;