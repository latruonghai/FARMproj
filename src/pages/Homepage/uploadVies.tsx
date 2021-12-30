import React, {useContext} from 'react';
import { ViewModule, ImageResultProps, UploadProps } from '../../types/index';
import ImageContext from '../../hooks/useImageContext';
import _ from "lodash";
import { nameOfModules } from './listOfCategories';
import declareURL from '../../utils/stringhandle';
import classNames from 'classnames';
import { Rounded } from '../../utils/stringhandle';
import convertImgToBase64 from '../../utils/handleImage';
// import classNames
// Rounded
// declareURL
// nameOfModules

let stateCurr: any = null;

const UploadView = (props:ViewModule) =>{
    let {uploadState, setImageUpload, processState, imageCode} = useContext(ImageContext);
    

    const clickHandle = function(e:any) {
        let classname:string = e.target.className as string;
        e.target.className = _.replace(classname, "bg-white", "bg-blue text-white");
        const stateCurrName = stateCurr?.target?.className;
        if (stateCurr) stateCurr.target.className = (e.target !==stateCurr?.target)?
        _.replace(stateCurrName, "bg-blue text-white", "bg-white"):
        stateCurrName;
        stateCurr = e;
        stateCurr && setImageUpload(
        
            {
                ...uploadState,
                gpu: _.indexOf(nameOfModules, stateCurr.target.firstChild.data) - 1
            }
        );
    }
    
    return (
        <div className="md:flex-1 md:pr-14">
            <div className="space-y-12">

                <ul className="flex bg-blue-500 rounded">

                {props?.modules?.map((module, index) =>{
                    return(
                        <li key={index.toString()} className="m-0.5 flex bg-white text-center items-center justify-center flex-1 text-sm p-0.5 cursor-pointer" onClick={clickHandle}>{module}</li>
                        )
                    })}
                </ul>
                <div className="w-full flex">
                    <UploadImage setImageUpload={setImageUpload} uploadState={uploadState}></UploadImage>
                    <ImageResult processState={processState}></ImageResult>
                    <ListFaceResult imageCode={imageCode}></ListFaceResult>
                    
                </div>
            </div>
        </div>
    )
}
const ImageResult = ({processState}:any)=>{
    return(
        <div className="w-5/12 flex flex-col space-y-4">
                        {processState.state!==null && 
                        <h2 className="text-red-300 text-lg">
                            {processState.state ? "Emotions were found":"Emotions were not found"}
                        </h2>}
                        <div className="text-center flex justify-center items-center border-4 border-dashed w-80 h-80">
                            {processState.imageString && <img className="w-full h-full object-contain"  src={processState.imageString}/>
                            }
                        </div>
                    </div>
    )
}
const ListFaceResult = ({imageCode}: ImageResultProps) =>{
    
    return(
        <div className="w-1/2 flex flex-col space-y-4 left-8 border-solid border-x-2
                                    rounded-2xl max-h-352 overflow-auto">
                        <div className="text-center flex flex-col justify-center items-center border-solid max-w-full">
                            
                            {imageCode && imageCode.map( (image, index) =>{
                                    return(
                                        <div className="w-full flex items-center m-2 border-solid border-2 
                                            rounded-md border-zinc-50 
                                            bg-gradient-to-b from-white via-blue-100 to-white">
                                        <div className="w-64 h-64 my-1 mr-3 rounded-sm border-2">
                                            <img key={index.toString()} className="w-full h-full"
                                            src={image.faceImage} alt="Faces"/>
                                        </div>
                                        <div className="ml-1 w-96 h-64">
                                            <ul className="text-sm font-bold font-mono">
                                                <li className=" mb-0">Cảm xúc:</li>
                                                <li className=" mb-0">Độ tin cậy:</li>
                                                <li className="">Thời gian:</li>
                                            </ul>
                                        </div>
                                        <div className="ml-1 w-auto h-64">
                                            <ul className=" ml-2 text-sm font-bold font-mono float-left">
                                                <li className="text-red-500 mb-0">{image.label}</li>
                                                <li className=" mb-0">{image.confidence}</li>
                                                <li className="">{`${Rounded(image?.time)}s`}</li>
                                                
                                            </ul>
                                        </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
    )
}

const UploadImage = ({setImageUpload, uploadState}:UploadProps) =>{
    // let {uploadState, setImageUpload} = useContext(ImageContext);
    const Uploaded = (ev: any) =>{
        const files = ev.target.files;
        // console.log(files);
        let file = files[0];

        let reader: FileReader = new FileReader();
        // console.log("TYPE", typeof(reader.result));
        reader.onload = function(){
            let base64String = reader.result as string;
            base64String = base64String.replace("data:", "").replace(/^.+,/, "");
            
            setImageUpload({
                ...uploadState,
                file: declareURL(base64String)
            });
            

        }

        file && reader.readAsDataURL(file);
    }
    const handleUpload = () => {
                        document.getElementById("hidden_upload")?.click();

                    }
    const handleChangeInput = (e: any) => {
        convertImgToBase64(e.target.value, function (url:any){
            setImageUpload(
                {
                    ...uploadState,
                    file: url
                }
            )
            
        });
        
    }
    return(
        <div className="w-1/2 flex flex-col items-center space-y-4">
                        <div className={classNames("text-center flex justify-center items-center", 
                            {
                                "w-56 h-56 p-4 border-4 border-dashed": !uploadState.file,
                                "w-96 h-96 p-4": uploadState.file
                            })} onClick={handleUpload}>
                                <input id="hidden_upload" type="file" accept="image/jpeg, image/png"
                                multiple style={{display:"none"}} tabIndex={-1} autoComplete="off" onChange={Uploaded}/>
                                
                                {uploadState.file ? 
                                <div className="md:p-8 w-full h-full align-middle bg-gradient-to-r from-yellow-100 via-red-200 to-pink-300">
                                    <img className="w-full h-full object-contain" alt="selected Image" src = {uploadState.file}/>
                                </div> : <p>Tải lên hình ảnh</p>}
                        </div>

                        <div className='flex flex-col m-1'>
                            <h2 className='text-black font-bold text-center m-1'>Nhận diện qua link hình ảnh</h2>
                            <input id="img-link"  type="text" placeholder='Chèn link ảnh tại đây'
                            className='border-dashed rounded-xl text-center focus:border-blue-500
                                hover:bg-red-100 select-all'  onChange={handleChangeInput}></input>
                        </div>
                    </div>
    );
}
export default UploadView;