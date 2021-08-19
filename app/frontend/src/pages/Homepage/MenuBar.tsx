import React, { FC } from "react";
import { Nav } from "react-bootstrap";
const NavColumn = () =>{
    return(
        <Nav defaultActiveKey="/home"
            className="flex-column">
            <Nav.Item>
                {/* <img src= alt="" /> */}
            </Nav.Item>
        </Nav>
    )
}
