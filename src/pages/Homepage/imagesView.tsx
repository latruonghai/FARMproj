import React, { useCallback, useContext, useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
// import { BufferString } from "../../types";
import { readBuilderProgram } from "typescript";
import declareURL from "../../utils/stringhandle";
import classNames from "classnames";
import _ from "lodash";
import { ImageContextType } from "../../types";
import Webcam from "react-webcam";

// import { Data } from '../../../types/index';
// import { Data, BufferString, ImageContextType, ImageString } from '../../types/index';
import ImageContext from '../../hooks/useImageContext';

// let data:any = {
//     gpu: 1,
//     show:false,
//     data: null,

// };

// const 
// const ImageState = React.createContext(
//     {} as BufferString,
// );


// export default function ImageView(props:any){
//     let bufferString:BufferString = {
//         gpu:-1,
//         show: false,
//         file: "",
//     };
//     const [stateImage, setImageState] = useState(bufferString);
//     let base64String: string;

//     const onChangeHandler = (ev:any, state: {}) =>{

        
//         const files = ev.target.files;
//         console.log(files);
//         let file = files[0];
//         console.log("File", file);

//         let reader: FileReader = new FileReader();
//         console.log("TYPE", typeof(reader.result));
        
//         reader.onload = function(){
//             base64String = reader.result as string;
//             base64String = base64String.replace("data:", "").replace(/^.+,/, "");
//             console.log(base64String);
//             // let img: Buffer = Buffer.from(base64String, 'base64');
//             setImageState(
//             {
//                 ...bufferString, 
//                 file: base64String,
                
//             }
//             );
//         }
//         // print()
//         file && reader.readAsDataURL(file);
        
//     }
    
//     return(
//         <ImageState.Provider value={
//             {
//                 ...stateImage,
//                 setFunc: setImageState
            
//             }
//         }>
//             <div className="md:w-1/2 md:h-5/6 h-2/4 w-1.5 m-auto">
//                 <UploadForm onchangeCallback={onChangeHandler}></UploadForm>
//                 <Image ></Image>
//                 <Button data={stateImage}></Button>
//             </div>
//         </ImageState.Provider>
//     )
// }


// const Image = (props:any)=>{
//     // const [imageByte, setImageByte] = useState(props.image)
//     const imageFile = useContext(ImageState);
//     function declareURL(image:string){
//         return "data:image/jpeg;base64," + image;
//     }

//     return (
//         <div className="bg-contain h-5/6 bg-gradient-to-r from-yellow-100 via-red-200 to-pink-300 ">
//             {imageFile && <img id="image-res" src={declareURL(imageFile.file)}
//             className="bg-contain h-full m-auto" 
//             alt="Container face"></img>}
//         </div>
//     )
// }

// const Button = (props:any)=>{
//     // useCallback()
//     const imageState = useContext(ImageState);
//     const setImageSrc = imageState.setFunc as Dispatch<any>;
//     const sendImage = async () =>{ 
//             console.log("Props", props.data);
//             const {gpu, show, file} = imageState;
//             // console.log("Image", buffer);
//             const data_image = {
//                         gpu: gpu,
//                         show: show,
//                         file:  file
//                     };
                
//             console.log("Data", data_image);
//             const response = await axios({
//                 method: "post",
//                 url: "http://127.0.0.1:8000/fer/recognition/image",
//                 data: data_image,
//                 headers: { "Content-Type": "application/json", }
//             })
//             console.log(response.data);
//             setImageSrc(
//                 {...data_image, file:response.data.body}

//             )
            
            
                
//     }
//     // useEffect(()=>{
//     //     console.log(props);
        
//     //     // document.querySelector("#send-image")?.addEventListener("click", sendImage);

//     //     // return (
//     //     //     () => {
//     //     //         document.querySelector("#send-image")?.removeEventListener("click", sendImage);
//     //     // });
//     // },[props.data.image]);

//     return(
//         <div className="h-1/6 w-full">
//             <div className="m-auto w-1/6">
//                 <button className="border bg-blue-500 hover:bg-blue-700
//                                 text-black font-bold py-2 px-4 rounded-full" id="send-image"
//                                 onClick={sendImage}>
//                 Button
//             </button>
//             </div>
//         </div>
//     )
// }

// const UploadForm = (props:any) =>{
//     const onChangeHandler = (ev:any)=>{
//         props.onchangeCallback(ev);
//     }
//     return(
//         <form className="bg-gray-100 m-auto w-2/4 h-1/6" >
//             <input id="image-upload" type="file" className="m-2.5" onChange={onChangeHandler}/>
//         </form>
//     )
// }
let stateCurr: any =null;

const nameOfModules: string[] = 
[
    "Blaze Face",
    "Viola Jones Algorithm",
    "Face-SSD",
]
interface ViewModule{
    modules?: string[];
}
const UploadView = (props:ViewModule) =>{
    let {uploadState, setImageUpload, processState, imageProcess} = useContext(ImageContext);
    

    const clickhandle = function(e:any) {
        // console.log(stateCurr?.target?.className);
        let classname:string = e.target.className as string;
        e.target.className = _.replace(classname, "bg-white", "bg-blue text-white");
        if (stateCurr) stateCurr.target.className = _.replace(stateCurr?.target?.className, "bg-blue text-white", "bg-white");
        stateCurr = e;
        stateCurr && setImageUpload(
        
            {
                ...uploadState,
                gpu: _.indexOf(nameOfModules, stateCurr.target.firstChild.data) - 1
            }
        );
    }
    const Uploaded = (ev: any) =>{
        const files = ev.target.files;
        // console.log(files);
        let file = files[0];
        console.log("File", file);

        let reader: FileReader = new FileReader();
        // console.log("TYPE", typeof(reader.result));
        reader.onload = function(){
            let base64String = reader.result as string;
            base64String = base64String.replace("data:", "").replace(/^.+,/, "");
            // console.log(base64String);
            // let img: Buffer = Buffer.from(base64String, 'base64');
            // setImageState(
            // {
            //     ...bufferString, 
            //     file: base64String,
                
            // }
            setImageUpload({
                ...uploadState,
                file: declareURL(base64String)
            });
            
            // console.log("Hello", uploadState.file);
            // );

        }
        // console.log("Hell", uploadState.file)
        // print()
        file && reader.readAsDataURL(file);
    }
    const handleUpload = () => {
                        document.getElementById("hidden_upload")?.click();
                        // console.log("hello")
                    }
    return (
        <div className="md:flex-1 md:pr-14">
            <div className="space-y-12">

                <ul className="flex bg-blue-500 rounded">

                {props?.modules?.map((module, index) =>{
                    return(
                        <li className="m-0.5 flex bg-white text-center items-center justify-center flex-1 text-sm p-0.5 cursor-pointer" onClick={clickhandle}>{module}</li>
                        )
                    })}
                </ul>
                <div className="w-full flex">
                    <div className="w-1/2 flex flex-col items-center space-y-4">
                        {/* {imageProcess ? 
                            
                            : <div className="text-center flex justify-center items-center w-96 h-96 p-4">
                                    <CameraCapture/>
                            </div>} */}
                        <div className={classNames("text-center flex justify-center items-center", 
                            {
                                "w-56 h-56 p-4 border-4 border-dashed": !uploadState.file,
                                "w-96 h-96 p-4": uploadState.file
                            })} onClick={handleUpload}>
                                <input id="hidden_upload" type="file" accept="image/jpeg, image/png"
                                multiple style={{display:"none"}} tabIndex={-1} autoComplete="off" onChange={Uploaded}/>
                                
                                {uploadState.file && 
                                <div className="md:p-8 w-full h-full align-middle bg-gradient-to-r from-yellow-100 via-red-200 to-pink-300">
                                    <img className="w-full h-full object-contain" alt="selected Image" src = {uploadState.file}/>
                                </div> || <p>Tải lên hình ảnh</p>}
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col space-y-4 items-center">
                        {processState.state!==null && 
                        <h2 className="text-red-300 text-lg">
                            {processState.state ? "Emotions were found":"Emotions were not found"}
                        </h2>}
                        <div className="text-center flex justify-center items-center border-4 border-dashed w-80 h-80">
                            {processState.imageString&&<img className="w-full h-full object-contain"  src={processState.imageString}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ImageView(props:any){
    const {imageProcess} = useContext(ImageContext);
    return (
        <div>
            
            <div className="h-auto">
                
                <div className=" mx-auto p-6 space-y-12 pb-16 w-11/12 md:w-5/6 divide-gray-200">
                    <UploadView modules= {nameOfModules}></UploadView>
                    {/* <CameraCapture/> */}
                    
                </div>
                <div className="w-11/12 h-auto m-auto">
                    <div className="flex flex-row items-center justify-center">
                        <Button actionName = "Xóa" process={false} send={false}></Button>
                        <Button actionName="Xử lý" send={true} process={true} />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
const CameraCapture = (props:any) =>{
    const webCamRef = React.useRef<any>(null);
    const {setImageProcess} = useContext(ImageContext)
    const mediaRecorderRef = React.useRef<any>(null);

    const [capturing, setCapturing] = useState<boolean>(false);
    const [recordedChunks, setRecordedChunks]= useState([]);
    const handleDataAvailable = useCallback(({data}) =>{
        
        if (data.size > 4){
            // reader.readAsDataURL(data);
            // console.log("Type", uploadState);
            // const response = await axios({
            //     method: "post",
            //     url: "http://127.0.0.1:8000/fer/recognition/image",
            //     data: data,
            //     headers: { "Content-Type": "application/json", }
            // })
            // // setImageProcess(response.data.body.image);
            setRecordedChunks((prev) => prev.concat(data));

        }
    }, [setRecordedChunks]);
    const handleStartCapturing = useCallback(() =>{
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webCamRef?.current?.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webCamRef, setCapturing, mediaRecorderRef, handleDataAvailable])
    

    const handleStopCatureClick = useCallback(() =>{
        mediaRecorderRef.current.stop();
        setCapturing(false);
        // console.log(recordedChunks);
    }, [mediaRecorderRef, setCapturing]);

    const handleDownload = useCallback(() =>{
        
    }, [recordedChunks])
    return (
    <>
        <Webcam audio={false} ref={webCamRef} />
        {capturing && (
            <button className="cursor-pointer" onClick={handleStopCatureClick}>Stop Capture</button>
        ) || (
            <button className="cursor-pointer" onClick={handleStartCapturing}>Start Capture</button>
        )}
        {recordedChunks.length > 0 && (
            <button className="mx-5" onClick={handleDownload}>Download</button>
        )}
    </>
    )
}
const Button = (props:any) =>{
    const {setImageProcess, uploadState, setImageUpload,
        setImage, imageProcess, setSending, sending} = useContext(ImageContext);
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
        )
        setImage(!imageProcess);

    }
    const sendImage = async () =>{ 
            // console.log("Props", props.data);
            console.log(uploadState);
            // const {gpu, show, file} = uploadState;
            // console.log("Image", buffer);
            // const data_image = 
            setSending(true);
            // console.log("Data", data_image);
            const response = await axios({
                method: "post",
                url: "http://127.0.0.1:8000/fer/recognition/image",
                data: data_image,
                headers: { "Content-Type": "application/json", }
            })
            // console.log(response.data);
            setImageProcess(
                {imageString: declareURL(response.data.body.image),
                state: response.data.body.state}

            )
            setSending(false);
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