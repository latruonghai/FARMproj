// <!-- component -->
import React, { Fragment } from "react";
import { createPortal } from "react-dom";
// import { guideLines } from "../pages/Homepage/listOfCategories";
import { guideLines } from "../assets/dataModal";

const Modal = ({hide, isShowing}: any) =>
    isShowing && createPortal(
        <Fragment>
            <div className="flex flex-col space-y-4 min-w-screen h-screen 
            animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
            <div className="flex overflow-auto flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl max-w-3xl max-h-6xl">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {/* <div className="flex flex-col ml-3">
                            <h1 className="font-medium leading-none">Hướng dẫn</h1>
                            <p className="text-sm text-gray-600 leading-none mt-1">By deleting your account you will lose your all data
                            By deleting your account you will lose your all data
                            By deleting your account you will lose your all data
                            By deleting your account you will lose your all data
                            By deleting your account you will lose your all data
                            By deleting your account you will lose your all data
                            </p>
                        </div> */}
                        <ContentSize paragraphs={guideLines.paragraphs}
                            heading1={guideLines.heading1}/>
                    </div>
                   
                </div>
            </div>
            <header className="">
                    {/* <span onClick={hide} className="absolute right-0 top-0 
                                                        ">X<span/> */}
                    <span onClick={hide} className="top-right close-button hover:bg-red-400" >X</span>
            </header>
            {/* <div className="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div className="flex flex-col ml-3">
                            <div className="font-medium leading-none text-gray-100">Delete Your Acccount ?</div>
                            <p className="text-sm text-gray-500 leading-none mt-1">By deleting your account you will lose your all data
                            </p>
                        </div>
                    </div>
                    <button  className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button>
                
                </div>
            </div> */}
            </div>
        </Fragment>, document.body
    )


const ContentSize = (props: any) =>{
    return(
        <Fragment >
            <h1 className="flex text-center text-3xl text-red-500">{props.heading1}</h1>
            
            <div className="flex flex-col m-auto p-4 ">
                {props.paragraphs && props.paragraphs.map((par: any, index: any) =>{
                return(
                    <Fragment>
                        <h2 key={`heading-${index}`} className="flex-col text-center text-2xl font-bold">
                            {par.heading2}
                        </h2>
                        <ContentArea content={par.content}></ContentArea>
                    </Fragment>
                )})}
            </div>
        </Fragment>
    )
}
const ContentArea = (props:any) =>{
    return(
        <div className="flex flex-col">

            {props?.content && props?.content.map((cont: any, index:any) =>{
            return(
            cont.paragraph && (
                <Fragment>
                    <p key={`par-${index}`} className="text-xl max-w-lg flex text-center m-auto p-2">
                    {cont?.paragraph}
                    </p>
                    <img key={`img-${index}`} className="m-auto max-w-lg max-w-xl flex" 
                    src={cont?.image} alt=""/>
                </Fragment>
            ))})}
        </div>
    )
}
export default Modal;