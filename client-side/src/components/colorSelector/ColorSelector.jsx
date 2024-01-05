import React, { useContext } from 'react'




function ColorSelector({colorCode,operator,color}) {
   
  return (
    <div className={` rounded-lg p-1 ${colorCode===color?" border border-blue-300 ":""}`} >

    <div
    key={color}
    onClick={(e) => operator(colorCode)}
    style={{backgroundColor: colorCode}}
    className={` cursor-pointer rounded-lg  border-gray-400 border h-7 w-7 `}
    ></div>
    </div>
  )
}

export default ColorSelector