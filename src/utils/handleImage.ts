
// import {g} from "get-image-urls";
export default function convertImgToBase64(url:string, callBack: any){
	let canvas:any = document.createElement('CANVAS');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	img.crossOrigin = 'Anonymous';
	img.onload = function(){
	    canvas.height = img.height;
		canvas.width = img.width;
	    ctx.drawImage(img,0,0);
	    let dataURL = canvas.toDataURL('image/jpeg', 1.0);
        // console.log(dataURL);
	    callBack.call(this, dataURL);
        // Clean up
	    canvas = null; 
	};
    callBack(url);
	img.src = url;
}