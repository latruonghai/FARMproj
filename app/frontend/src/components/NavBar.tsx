import { Navbar, Nav, NavDropdown, NavLink} from "react-bootstrap";
import logo from "../logo.svg";
import StringOrObject from "../types";
import {ProcessString} from "../services/stringprocess"
type StringAndArray = string |StringOrObject;


const NavBar = ({data}: {data:StringAndArray[]}) =>{
    let navs:object[] = [];
    data.forEach((value: StringAndArray) =>{
        if(typeof value ==="string"){
            navs.push(<NavLink href={`#${ProcessString(value)}`}>{value}</NavLink>);
        }
        else if(typeof value === "object"){
            let name:string = value["name"];
            let nav = <NavDropdown id={ProcessString(name)} 
                                    title={name}>
                        {value["categories"].map(cat =>{
                            return(<NavDropdown.Item 
                                href={`#${ProcessString(cat)}`}
                                >{cat}</NavDropdown.Item>)
                        })}
                    </NavDropdown>
            navs.push(nav);
        }
    })
    return(
        <Navbar bg="blue" collapseOnSelect expand="md">
            <Navbar.Brand>
                <img src={logo} alt="" width="40px" height="40px"/>
                Blog
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    {navs}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;