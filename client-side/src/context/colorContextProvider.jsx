import { useState } from "react";
import {colorContext} from "./colorContext";

const ColorContextProvider=({children})=>{
    const [color,setColor]=useState("#000000");
    const [stroke,setStroke]=useState("5");
    const [sheetColor,setSheetColor]=useState("#FFFFFF");
    const [resetWarning,setResetWarning]=useState(false);
    const [imageSelector,setImageSelector]=useState(false);
    return (
       <colorContext.Provider value={{color,setColor,stroke,setStroke,sheetColor,setSheetColor,resetWarning,setResetWarning,imageSelector,setImageSelector}} >
       {children}
       </colorContext.Provider>
    )
}


export{
    ColorContextProvider
}