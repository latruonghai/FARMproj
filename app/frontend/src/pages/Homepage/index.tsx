import React from "react";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import data from "../../assets/data";
import LoginForm from "../LoginPage";
// import 'bootstrap';
export default function HomePage(){

    return(
        <div>

            <NavBar data={data}/>
            <LoginForm/>
            {/* <Input 
            className="login-user"
            typeName="text"
            value="Hello"
            /> */}
        </div>
    )
}