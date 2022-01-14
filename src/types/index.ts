// import { StateOption } from './index';
import { Dispatch, SetStateAction } from "react";
// import { ImageContext } from '../hooks/useImageContext';

export interface NavData{
    datas: Component[];
    secondary?:boolean;

}

type Component = {
    name: string;
    style: string[];
    toggle?: boolean;
    
}

export interface BufferString{
    gpu: number;
    method?:number;
    show: boolean;
    file: string;
    process: number;
    // setFunc?: Dispatch<any>
}
export interface ImageString {
    imageString?: string;
    state?: number | null;
    
}
export interface ActionImageReducer{
    type:string;
    data: string[];
    currentData: string;
    file: string;
    process: number;
}
export interface ActionOptionReducer{
    type: string;
    event: any;
    stateCurr: StateOption;
    bg:string;
}
export interface StateOption{
    moduleStateCurr: any;
    methodStateCurr: any;
}
export interface ImageCode{
    
    confidence?: number;
    faceImage?: string;
    time?: number;
    label?:string;
}
export interface ImageContextType{
    uploadState: BufferString;
    stateOption: StateOption;
    setStateOption: Dispatch<any>;
    setImageUpload: Dispatch<any>;
    processState: ImageString;
    setImageProcess: Dispatch<any>;
    imageProcess: boolean;
    setImage: Dispatch<any>;
    sending: boolean;
    setSending: Dispatch<any>;
    imageCode: ImageCode[];
    setImageCode: Dispatch<any>;
}

// export interface Data
export interface ViewModule{
    type: string;

    module: string[];
    bg?:string;
}
export interface ViewModules{
    modules?: string[][];
}
export interface ImageResultProps{
    imageCode: ImageCode[];
}
export interface UploadProps{
    setImageUpload: Dispatch<any>;
    uploadState: BufferString;
}