import React, { useContext } from 'react'
import { colorContext } from '../../context/colorContext'

function ImageInput({z}) {
  const {setImageSelector}=useContext(colorContext);

  return (
<div className={` backdrop-blur-sm absolute z-[${z}] h-screen w-full flex justify-center items-center`} >
<div className={`bg-white border border-gray-400 p-10 rounded-xl  max-w-sm mx-auto`}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">File Name</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " defaultValue="demo_sketch" required/>
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">File Type</label>
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"  name="" id="">
        <option value="png">PNG</option>
        <option value="">JPEG</option>
        <option value="">WEBP</option>
    </select>
  </div>
  
  <button onClick={()=>setImageSelector((prev)=>!prev)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">Submit</button>
</div>
</div>
  )
}

export default ImageInput