import _ from "lodash";

export default function declareURL(image:string){
        return !_.startsWith(image, "data:image/jpeg;base64,") ? "data:image/jpeg;base64," + image:image;
    }

export function Rounded(num: number | undefined){
    if (num){
        return Math.round((num + Number.EPSILON) * 100) / 100
    }
}

export function toIDName(name: string) {
    return _.camelCase(name);
}
export function ensureURL(str: string){
    let newStr ="";
    if(str.includes( ".jpg")|| str.includes(".jpeg")){
        newStr = "image/jpeg";
    }
    else {
        newStr = "image/png";
    }
    return newStr;
}