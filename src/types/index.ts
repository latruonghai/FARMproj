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
export type ImageString  = {
    imageString: string;
    state: number | null;
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

}

// export interface Data