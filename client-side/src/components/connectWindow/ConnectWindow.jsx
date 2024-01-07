import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { colorContext } from "../../context/colorContext";

function ConnectWindow({ id, btnContent, method = "" }) {
  const idGenerator = uuid();
  const {
    broadcasting,
    setBroadcasting,
    reciverId,
    setReciverId,
    setIsReciver,
    setConnectionWindow
  } = useContext(colorContext);
  return (
    <div className="w-full  max-w-xs">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            ID
          </label>
          <input
            onChange={(e) => setReciverId(e.target.value)}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            readOnly={method === "host" ? true : false}
            defaultValue={reciverId}
          />
          <span className={`${method==="host"?"":"hidden"}`} >
          <button onClick={ async()=>{ await window.navigator.clipboard.writeText(reciverId);
             setConnectionWindow(false)}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">Copy</button>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <button
            key={broadcasting}
            onClick={() => {
              if (broadcasting && method == "host") {
                setBroadcasting(false);
                setReciverId("");
              } else if (!broadcasting && method == "host") {
                setBroadcasting(true);
                setReciverId(idGenerator);
              }

              if (method == "join") {
                setIsReciver((prev) => !prev);
                setConnectionWindow(false);
              }
             
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {btnContent}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnectWindow;
