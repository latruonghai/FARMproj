import React from "react";
import UploadView from "./uploadVies";
// import { Data } from '../../../types/index';
// import { Data, BufferString, ImageContextType, ImageString, ImageCode } from '../../types/index';
import { nameOfModules } from "./listOfCategories";
import Button from "../../components/Button";



export default function ImageView(props:any){
    return (
        <div>
            
            <div className="md:h-full">
                
                <div className=" mx-auto p-6 space-y-12 pb-16 w-full md:w-full items-center divide-x-2">
                    <UploadView modules= {nameOfModules}></UploadView>
                    {/* <CameraCapture/> */}
                    
                </div>
                <div className="w-11/12 h-auto m-auto">
                    <div className="flex flex-row items-center justify-center">
                        <Button id="del" actionName = "Xóa" process={false} send={false}></Button>
                        <Button id="proc" actionName="Xử lý" send={true} process={true} />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

