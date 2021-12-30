import React, {useContext} from "react";
import ImageContext from "../hooks/useImageContext";
import axios from "axios";
import { ImageCode } from "../types";
import _ from "lodash";
import declareURL from '../utils/stringhandle';
import classNames from "classnames";
// import { OperationCanceledException } from "typescript";
// import { OperationCanceledException } from "typescript";
// declareURL
const Button = (props:any) =>{
    const {setImageProcess, uploadState, setImageUpload,
        setImage, imageProcess, setSending, sending, setImageCode} = useContext(ImageContext);
    // const {}
    const data_image = {
        ...uploadState,
        file: _.replace(uploadState.file, "data:image/jpeg;base64,", "")
    }
    const delImage = () =>{
        setImageProcess(
            {
                imageString: "",
                state:null
            }
        );
        setImageUpload(
            {
                file:""
            }
        );
        document!.querySelector("input")!.value="";
        setImage(!imageProcess);
        setImageCode([]);

    }
    const sendImage = async () =>{ 
            setSending(true);
            try{
                const response = await axios({
                method: "post",
                timeout: 15000,
                url: "http://127.0.0.1:8000/fer/recognition/image",
                data: data_image,
                headers: { "Content-Type": "application/json", }
            });
                if(response?.data){
                    const dic_guided = response.data.body.dict_face;
                    let array: ImageCode[] = [];
                    for(let key in dic_guided){
                        
                        let dict:any= dic_guided[key]

                        array = array.concat([
                            {
                                faceImage: dict.face_encode,
                                confidence: dict.confidence,
                                label: dict.emotion,
                                time: dict.time_predict,

                            }]);

                    }
                    setImageCode(array);
                    setImageProcess(
                        {imageString: declareURL(response.data.body.image),
                        state: response.data.body.state}

                    )
                    
                }
            }
            catch (error: unknown){
                alert(error);
                
            }
            setSending(false);
            // Handle succes
            

            
            
    }
    return (
        <button className={classNames("border  hover:bg-blue-700 m-1 font-bold py-2 px-4 rounded-full center cursor-pointer",
            {
                "bg-blue-500 text-black": !sending || !props.send,
                "bg-gray-600 text-white": sending && props.send
            }
        )}
                onClick={props.process && sendImage || delImage }>{sending && props.send &&"Đang xử lý" || props.actionName}</button>
    )
}

export default Button;