import React from 'react';
import { connect } from "react-redux";
import {closeFeedback} from "../actions/feedbackAction"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Feedback extends React.Component{

    handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
       this.props.dispatch(closeFeedback()) 
    } 
   
    render(){
        return (
            <Snackbar open={this.props.feedbackOpen} autoHideDuration={6000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity={this.props.feedbackType}>
                        {this.props.feedbackMessage}
                    </Alert>
            </Snackbar>
         );
    }
    
}
const mapStateToProps = (state) => ({
    feedbackOpen: state.feedback.open,
    feedbackType: state.feedback.type,
    feedbackMessage: state.feedback.message,
    
});
export default connect(mapStateToProps)(Feedback);