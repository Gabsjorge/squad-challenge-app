import React, { Component } from 'react';

import logo from '../../assets/logo.jpg';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img id="logo" src={logo} alt="Venturus Logo"/>
                <h1 className="navText">Squad Management App</h1>
            </nav>
        );
    }
}

export default Navbar;