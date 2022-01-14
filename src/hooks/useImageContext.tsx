import React, { createContext } from "react";
import { ImageContextType } from "../types";
// import useContext from 'react';
import {useState} from 'react';
import { BufferString, ImageString, ImageCode, StateOption } from '../types/index';
import {useReducer} from 'react';
import { reducerForStateCurr } from "./useImageRequestReducer";
import reducerForImageSend from "./useImageRequestReducer";

const ImageContext = createContext({} as ImageContextType);

export const ImageProvider = ({children}: any) =>{
    const [stateOption, setStateOption] = useReducer(reducerForStateCurr,
                                                    {moduleStateCurr:null, methodStateCurr:null} as StateOption)
    const [uploadState, setImageUpload] = useReducer(reducerForImageSend , {show:false, process:0, method:-1, gpu:-1} as BufferString);
    const [processState, setImageProcess] = useState( {state: null} as ImageString);
    const [imageProcess, setImage] = useState(true);
    const [imageCode, setImageCode] = useState([] as ImageCode[])
    const [sending, setSending] = useState(false);
    return(
        <ImageContext.Provider value={{
            stateOption,
            setStateOption,
            uploadState,
            setImageUpload,
            processState,
            setImageProcess,
            imageProcess,
            setImage,
            sending,
            setSending,
            imageCode,
            setImageCode
        }}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContext;