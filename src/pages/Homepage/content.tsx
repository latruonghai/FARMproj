import React from "react";

function ContentComponent(props:any){
    return (
        <div>
            <TextItem></TextItem>
        </div>
    );
}

function TextItem(){
    return(
        <div className="h-1/2 w-4/5 text-center bg-red-100 float-left transform box-content">
            Hello
        </div>
    )
}
export default ContentComponent;