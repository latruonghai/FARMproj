// import { NavData } from './../../types/index';
import {
    NavData
} from "../../types";
import image1 from "../../assets/images/logo512.png";

const categories: NavData = {
    datas: [{
            name: "Hướng dẫn",
            style: [],
            toggle: true
        },


    ]
}

const nameOfModules: string[] = [
    "Blaze Face",
    "Viola Jones Algorithm",
    "Face-SSD",
]

const nameOfMethod: string[] = [
    "Ensemble",
    "CNN Minimum",
    "CNN",
    "MobileNet"

]

const nameOptions: string[][] = [
    nameOfModules,
    nameOfMethod
]

const formatURL: string[] = [
    'image/png',
    'image/jpeg',
    'image/jpg',

]
const dropDownName = [
    "Không",
    "Có",
]
export {
    categories,
    nameOptions,
    formatURL,
    dropDownName,

};