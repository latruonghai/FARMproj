// import { NavData } from './../../types/index';
import { NavData } from "../../types";

const categories: NavData = {
    datas:[
        {
            name: "Images",
            style:[],
            toggle: true
        },
        

    ]
}

const nameOfModules: string[] = 
[
    "Blaze Face",
    "Viola Jones Algorithm",
    "Face-SSD",
]

const formatURL: string[] =[
    'image/png',
    'image/jpeg',
    'image/jpg',
    
]
export  {categories, nameOfModules, formatURL};
