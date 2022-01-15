import React, { Fragment }  from "react";
import HomePage from "./pages/Homepage";

function App(){
    return(
        <Fragment>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="h-full overflow-auto">
                <HomePage/>
            </div>
        </Fragment>
    )
}

export default App;