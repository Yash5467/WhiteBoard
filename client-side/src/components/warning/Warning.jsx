import React, { useContext } from 'react'
import { colorContext } from '../../context/colorContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faCross, faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';

function Warning({z}) {
    const {setSheetColor,setResetWarning}=useContext(colorContext)
  return (
   <div  className={`absolute z-[${z}] ${z=='-1'?"hidden":null} h-full w-full backdrop-blur-[5px] flex justify-center items-center`} >
<div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
            <button  onClick={()=>setResetWarning(false)} type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
             <FontAwesomeIcon size="xl" icon={faRemove} />
            </button  >
            <span className='m-5 inline-block' >   <FontAwesomeIcon  size='xl' icon={faTrash} /></span>
            <p className="mb-4 text-gray-500 ">Are you sure you want to reset sheet?</p>
            <div className="flex justify-center items-center space-x-4">
                <button onClick={()=> setResetWarning(false)} className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    No, cancel
                </button>
                <button onClick={()=>{
                    setSheetColor((prev)=>prev=="#FFFFFF"?"#FDF8F6":"#FFFFFF");
                    setResetWarning(false)
                }} className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                    Yes, I'm sure
                </button>
            </div>
            </div>
            </div>

  )
}

export default Warning