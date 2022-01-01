import React from "react";
import NavBarInfo from "./infomationBar";
// import ContentComponent from "./content";
import { categories } from "./listOfCategories";
import ImageView from "./imagesView";
import { ImageProvider } from "../../hooks/useImageContext";

function HomePage(){
    return(
        <ImageProvider>
            <div className="homepage h-full">
                <NavBarInfo datas={categories.datas}/>
                {/* <ContentComponent/> */}
                <ImageView></ImageView>
            </div>
        </ImageProvider>
    )
}

export default HomePage;