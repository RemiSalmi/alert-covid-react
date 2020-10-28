import React from 'react';
import '../assets/css/covid.scss'
import {ReactComponent as Ring} from '../assets/images/ring.svg';
import Login from './Login'


class Landing extends React.Component{
       
    render(){
        return (
            <div className="container-fluid h-100">
                <Ring className="landingRing"></Ring>
                <svg viewBox="0 0 200 200" className="blob" xmlns="http://www.w3.org/2000/svg">
                <path fill="#E9F4FD" d="M51.3,-66.2C62.7,-51.6,65.5,-31.8,68.1,-12.7C70.7,6.5,73.1,25,63.2,31.3C53.4,37.5,31.3,31.5,13.4,38.9C-4.5,46.3,-18.2,67.1,-26.7,66.8C-35.2,66.6,-38.4,45.3,-44,28.7C-49.5,12.2,-57.5,0.3,-53.3,-7C-49.2,-14.4,-33.1,-17.3,-22.2,-32C-11.3,-46.7,-5.6,-73.3,7.2,-81.8C20,-90.3,39.9,-80.9,51.3,-66.2Z" transform="translate(100 100)" />
                </svg>

                <div className="row h-100">
                    <div className="col-md-6">
                        <div className="container justify-content-center h-100 d-flex flex-column" style={{paddingLeft:"5%"}}>
                            <h1 className="landingTitle landingTitleColor1">Destroy</h1>
                            <h1 className="landingTitle landingTitleColor1">Corona <span className="landingTitleColor2">Virus.</span></h1>
                            
                            <Login></Login>
                        </div>     
                    </div>
                    <div className="col-md-6 covidContainer">
                        <div class="covid-wrapper">
                        <div class="viruses">
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                            <div class="virus"></div>
                        </div>
                        <div class="covid-arms"></div>
                        <div class="covid-arms right"></div>
                        <div class="earth-wrapper">
                            <div class="earth-detail"></div>
                            <div class="earth">
                            <div class="covid-eyes earth-eyes"></div>
                            <div class="covid-eyes earth-eyes left"></div>
                            <div class="mask"></div>
                            <div class="mask-wrapper"></div>
                            <div class="mask-detail"></div>
                            <div class="mask-back"></div>
                            <div class="earth-green">
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                                <div class="earth-greens"></div>
                            </div>
                            </div>
                        </div>
                        <div class="covid">
                            <div class="covid-spots">
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            <div class="covid-spot"></div>
                            </div>
                            <div class="covid-eyes"> </div>
                            <div class="covid-eyes left"></div>
                            <div class="covid-eyebrow"></div>
                            <div class="covid-eyebrow right"></div>
                            <div class="covid-mouth"></div>
                            <div class="covid-cheek"></div>
                            <div class="covid-cheek right"></div>
                        </div>
                        </div>
                        <div class="covid-pulse">
                        <div class="covid-sticks">
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                            <div class="covid-stick"></div>
                        </div>
                        </div>
                    </div>
                </div>
               
            </div>
         );
    }
    
}

export default Landing;