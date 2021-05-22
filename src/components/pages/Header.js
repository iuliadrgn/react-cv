import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
           <Navbar bg="light" expand="lg" sticky='top' className='header'>

           </Navbar>
        );
    }
}

export default Header;