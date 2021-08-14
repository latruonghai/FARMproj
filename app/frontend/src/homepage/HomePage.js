import Login from './Login';
import React from 'react';
import ToolBox from './ToolBox';
import "./css/HomePage.css";

export default function HomePage(){

    return (
        <div>
            <ToolBox/>
            <Login/>
        </div>
    );
}