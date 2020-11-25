import React from 'react';
import { connect } from "react-redux";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

class ACBackdrop extends React.Component{

     
    render(){
        return (
            <Backdrop className="ac-backdrop" open={this.props.locationsLoading || this.props.positivesLoading || this.props.contactLocationsLoading || this.props.userLoading} >
        <CircularProgress color="inherit" />
      </Backdrop>
         );
    }
    
}
const mapStateToProps = (state) => ({
    locationsLoading : state.location.loading,
    positivesLoading : state.positives.loading,
    contactLocationsLoading : state.contactLocation.loading,
    userLoading: state.user.loading,
    
});
export default connect(mapStateToProps)(ACBackdrop);