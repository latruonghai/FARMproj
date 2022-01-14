import React from "react";
import UploadView from "./uploadVies";
// import { Data } from '../../../types/index';
// import { Data, BufferString, ImageContextType, ImageString, ImageCode } from '../../types/index';
import {nameOptions } from "./listOfCategories";
import Button from "../../components/Button";



export default function ImageView(props:any){
    return (
        <div>
            
            <div className="h-full">
                
                <div className="h-full mx-auto p-7 space-y-12 w-full md:w-full items-center divide-x-2">
                    <UploadView modules= {nameOptions}></UploadView>
                    {/* <CameraCapture/> */}
                    
                </div>
                <div className="w-11/12 h-auto m-auto">
                    
                </div>
            </div>
            
            
        </div>
    )
}

