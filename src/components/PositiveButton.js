import React from 'react';


class PositiveButton extends React.Component{

    positive = () =>{
        console.log("positif")
    }
       
    render(){
        return (
            <button onClick={this.positive} class="btn btn-primary btn-lg landingBtn" >I'm positive</button>
         );
    }
    
}

export default PositiveButton;