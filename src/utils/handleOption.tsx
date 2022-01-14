import _ from "lodash";
// import classNames from 'classnames';

export default function handleOption(e:any, stateCurr:any, bg:string){
    let className:string = e.target.className as string;
    e.target.className = _.replace(className, "bg-white", `${bg} text-white`);
    const stateCurrName = stateCurr?.target?.className;
    if (stateCurr) stateCurr.target.className = (e.target !==stateCurr?.target)?
    _.replace(stateCurrName, `${bg} text-white`, "bg-white"):
    stateCurrName;
    // if console.log(stateCurr.target.className);
    stateCurr = e;

    return stateCurr;
}