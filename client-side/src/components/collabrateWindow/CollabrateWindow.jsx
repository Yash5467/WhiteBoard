import React, { useContext, useState } from 'react'
import ConnectWindow from '../connectWindow/ConnectWindow'
import { colorContext } from '../../context/colorContext';

function CollabrateWindow() {
    const [isHost,setIsHost]=useState(true);
    const {broadcasting,isReciver}=useContext(colorContext);
  return (
   <div key={isHost} className=' flex justify-center  bg-white items-center' >
    <div className='' > 
   <div className="flex justify-evenly shadow-2xl p-3 ">
   <div   className={`cursor-pointer  text-center ml-1 py-3 w-full ${isHost?"bg-blue-500 text-white":"text-blue-500"} hover:bg-blue-700  font-bold rounded `} onClick={()=>setIsHost(true)} >Host</div>
    <div  className={`cursor-pointer text-center ml-1 ${!isHost?"bg-blue-500 text-white":"text-blue-500"}  py-3 w-full  hover:bg-blue-700  font-bold  rounded`}  onClick={()=>setIsHost(false)} >Join</div>
   </div>
    {isHost?<ConnectWindow method="host" btnContent={broadcasting?"End Session":"Start Session"} />:<ConnectWindow method="join" btnContent={isReciver?"Leave Session":"Join Session"} />}
   </div>
   </div>
  )
}

export default CollabrateWindow