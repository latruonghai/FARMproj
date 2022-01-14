import React, {useContext} from "react";
import _ from 'lodash';
import ImageContext from '../hooks/useImageContext';
// import {ImageContext}
interface DropdownCate{
    categories: string[];
}
function DropDownBox({categories}: DropdownCate){
    const {uploadState, setImageUpload} = useContext(ImageContext);
    function onClickHandle(e: any){
        const value = e.target.value;
        // console.log(value);
        setImageUpload({
            type: "changeProcess",
            process: value==="co"?1:0
        });
        // console.log(uploadState.process);
    }
    return (
        <div className="box-content mx-2">
            <select name="preprocessing" className="border-dashed" onChange={onClickHandle}>
                {categories && 
                categories.map( cat =>{
                    return(
                        <option value={_.lowerCase(cat)}>{cat}</option>
                    )
                })}
            </select>
        </div>
    )
}



export default function DropDown(props:any) {
    return (
        
        <div className="flex items-center m-auto">
            <span className="font-bold">{props.title}</span>
            <DropDownBox categories={props.categories}></DropDownBox>
        </div>
    )
}