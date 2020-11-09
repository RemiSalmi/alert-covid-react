import React from 'react';
import LocationButton from './LocationButton';
import PositiveButton from './PositiveButton';
import Map from './Map';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        className = "h-75"
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
          value : 0
        };
    }

    handleChange = (event, newValue) => {
        this.setState({value:newValue})
    };

    
       
    render(){
        return (
            <div className="container pt-5 h-100 w-100">
                <div className="row h-75">
                    <div className="col-md-6">
                        <h1>My locations</h1>
                        <AppBar position="static">
                            <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                                <Tab label="Map" {...a11yProps(0)} />
                                <Tab label="List" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={this.state.value} index={0}>
                            <Map locations={[]}></Map>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={1}>
                            <p>List</p>
                        </TabPanel>
                    </div>
                    <div className="col-md-6">
                    <h1>My contact locations</h1>
                        <AppBar position="static">
                            <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                                <Tab label="Map" {...a11yProps(0)} />
                                <Tab label="List" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={this.state.value} index={0}>
                            <Map locations={[]}></Map>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={1}>
                            <p>List</p>
                        </TabPanel>
                    </div>
                </div>
                <div className="row">
                    <LocationButton></LocationButton>
                    <PositiveButton></PositiveButton>
                </div>
            </div>
         );
    }
    
}

export default Dashboard;