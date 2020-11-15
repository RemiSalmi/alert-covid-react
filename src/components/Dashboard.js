import React from 'react';
import LocationButton from './LocationButton';
import PositiveButton from './PositiveButton';
import DeleteLocationButton from './DeleteLocationButton';
import Map from './Map';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tab from '@material-ui/core/Tab';
import {ReactComponent as Ring} from '../assets/images/ring.svg';
import { connect } from "react-redux";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        className = "h-100 mt-2"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <div className="h-100">
                {children}
            </div>
        )}
      </div>
    );
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value : 0,
          value2 : 0
        };
    }

    handleChange = (event, newValue) => {
        this.setState({value:newValue})
    };

    handleChange2 = (event, newValue) => {
        this.setState({value2:newValue})
    };

    
       
    render(){
        return (
            <div className="container-fluid pt-5 h-100 w-100 d-flex justify-content-around flex-column">
                <div className="row h-75 pt-3 justify-content-center">
                    <div className="col-md-11">
                        <Paper elevation={3} className="h-100 p-2 customBg">
                            <div className="d-flex justify-content-between dashResp">
                                <Tabs value={this.state.value} onChange={this.handleChange} TabIndicatorProps={{style: {background:'#6476d2'}}} aria-label="simple tabs example">
                                    <Tab label="Map" {...a11yProps(0)} />
                                    <Tab label="List" {...a11yProps(1)} />
                                </Tabs>
                                <div className="d-flex ">
                                    <LocationButton></LocationButton>
                                    <PositiveButton></PositiveButton>
                                </div>
                            </div>
            
                            <TabPanel value={this.state.value} index={0}>
                                <Map mapType="classic"></Map>
                            </TabPanel>
                            <TabPanel value={this.state.value} index={1}>
                                <TableContainer component={Paper}>
                                    <Table className="" aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Latitude</TableCell>
                                                <TableCell>Longitude</TableCell>
                                                <TableCell>Date</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {this.props.locations.map((location, index) => (
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    {location.latitude}
                                                </TableCell>
                                                <TableCell>{location.longitude}</TableCell>
                                                <TableCell>{new Date(location.date).toLocaleString()}</TableCell>
                                                <TableCell><DeleteLocationButton location={location} locIndex={index}></DeleteLocationButton></TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                        </Paper>
                        
                    </div>

                </div>
                

                <div>
                    <div className="dash-blob-1">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#e9f4fd" d="M35.3,-63.5C47.4,-54.1,59.9,-48,60.9,-37.9C61.9,-27.9,51.2,-14,51.7,0.3C52.2,14.6,63.9,29.1,60.8,35.4C57.7,41.7,39.8,39.8,27.2,41.5C14.6,43.2,7.3,48.5,-4.4,56C-16,63.6,-32.1,73.5,-38.4,68.1C-44.7,62.8,-41.3,42.3,-43.9,28.5C-46.5,14.6,-55.2,7.3,-63.1,-4.5C-70.9,-16.4,-78,-32.8,-71,-38.9C-63.9,-45.1,-42.6,-41.1,-28.4,-49.3C-14.3,-57.5,-7.1,-78,2.2,-81.9C11.6,-85.7,23.2,-73,35.3,-63.5Z" transform="translate(100 100)" />
                        </svg>
                    </div>  
                    <Ring className="landingRing"></Ring>
                </div>
            </div>
         );
    }
    
}
const mapStateToProps = (state) => ({
    locations: state.location.locations,
    locationsLoading : state.location.loading,
    contactLocations : state.contactLocation.locations,
    contactLocationsLoading : state.contactLocation.loading,
});

export default connect(mapStateToProps)(Dashboard);