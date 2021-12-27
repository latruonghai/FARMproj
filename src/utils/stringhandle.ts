export default function declareURL(image:string){
        return "data:image/jpeg;base64," + image;
    }

export function Rounded(num: number | undefined){
    if (num){
        return Math.round((num + Number.EPSILON) * 100) / 100
    }
}