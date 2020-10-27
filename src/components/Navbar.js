import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component{
       
    render(){
        return (
            <ul className="navigation__container navbar">
                <NavLink to="/" className="navLogo">
                    Alert <span>Covid.</span>
                </NavLink>    
            </ul>
         );
    }
    
}

export default Navbar;