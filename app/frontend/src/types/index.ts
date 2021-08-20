import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export{}
interface StringOrObject{
    name: string;
    categories: string[];
}
export default StringOrObject;

export interface SideBarItem{
    name: string;
    component: JSX.Element;

}