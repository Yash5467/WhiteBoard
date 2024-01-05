import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Button({content,icon,action}) {
  return (
    <li onClick={action}  >
    <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
      <span className="inline-flex justify-center items-center ml-4">
       <FontAwesomeIcon icon={icon} />
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">{content}</span>
    </div>
  </li>
  )
}

export default Button