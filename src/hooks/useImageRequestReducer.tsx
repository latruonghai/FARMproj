import { BufferString, ActionImageReducer, StateOption, ActionOptionReducer } from '../types/index';
import _ from "lodash";
import handleOption from '../utils/handleOption';
// const initialState: BufferString;

function reducerForImageSend(state: BufferString, action:ActionImageReducer){
    switch(action.type){
        case "method":
            
            
            {    
                // console.log(action.data, action.currentData);
            return {
                ...state,
                method: _.indexOf(action.data, action.currentData) - 1
            }}
        case "gpu":
            
            {
                // console.log("Data",action.data, action.currentData);
            return{
                ...state,
                gpu: _.indexOf(action.data, action.currentData) -1
            }}
        case "uploadFromImage":
            {
                return{
                    ...state,
                    file: action.file

                }
            }
        case "changeProcess":
            {
                return{
                    ...state,
                    process: action.process
                }
            }
        case "delUpload":
            {
                return{
                    ...state,
                    file: ""
                }
            }
        default:
            throw Error();
    }
}
function reducerForStateCurr(state: StateOption, action:ActionOptionReducer){
    switch(action.type){
        case "method":{
            // console.log("Method",action.event, action.stateCurr, action.bg);
            const stateCurr = handleOption(action.event, action.stateCurr.moduleStateCurr, action.bg);
            return{
                ...state,
                moduleStateCurr: stateCurr,
            }
        }
        case "gpu":{
            // console.log("GPU", action.event, action.stateCurr, action.bg);
            const stateCurr = handleOption(action.event, action.stateCurr.methodStateCurr, action.bg);
            return{
                ...state, 
                methodStateCurr: stateCurr,

            }
        }
        default:
            throw Error();
    }
}
export default reducerForImageSend;
export {reducerForStateCurr};
