import React, { createContext } from "react";
import { ImageContextType } from "../types";
// import useContext from 'react';
import {useState} from 'react';
import { BufferString, ImageString } from '../types/index';

const ImageContext = createContext({} as ImageContextType);

export const ImageProvider = ({children}: any) =>{
    const [uploadState, setImageUpload] = useState({show:false} as BufferString);
    const [processState, setImageProcess] = useState({state: null} as ImageString);
    const [imageProcess, setImage] = useState(true);
    const [sending, setSending] = useState(false);
    return(
        <ImageContext.Provider value={{
            uploadState,
            setImageUpload,
            processState,
            setImageProcess,
            imageProcess,
            setImage,
            sending,
            setSending
        }}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContext;