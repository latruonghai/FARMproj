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
    show: boolean;
    file: string;
    setFunc?: Dispatch<any>
}
export interface ImageString {
    imageString?: string;
    state?: number | null;
}
export interface ImageCode{
    
    confidence?: number;
    faceImage?: string;
    time?: number;
    label?:string;
}
export interface ImageContextType{
    uploadState: BufferString;
    
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
    modules?: string[];
}

export interface ImageResultProps{
    imageCode: ImageCode[];
}
export interface UploadProps{
    setImageUpload: Dispatch<any>;
    uploadState: BufferString;
}