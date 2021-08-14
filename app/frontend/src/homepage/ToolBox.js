import React, {Component} from "react";
import axios from "axios";
import {Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
// import "./css/Login.css";
import logo from "./logo.svg";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

class ToolBox extends Component{

    constructor(props){
        super(props);
        this.state = null;
    }

    
    render(){
        return (
            <div>

                <Navbar collapseOnSelect bg="info" sticky="top" expand="sm">
                    <Navbar.Brand >
                    <img src={logo} height="40px" width="40px"/> 
                        Blog
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav.Link href="about-us" className="nav-content">About Us</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default ToolBox;