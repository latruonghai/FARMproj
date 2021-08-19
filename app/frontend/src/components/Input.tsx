import React from "react";
// import classNames from "classnames";

interface PropsBase{
    className: string;
    typeName: string;
    value?: string;
}

const Input = ({className, typeName, ...props}: PropsBase) =>{
    return(
        <div>
            <input 
            type={typeName}
            className ={className}
            value={props.value!}/>
        </div>
    )
}

export default Input;