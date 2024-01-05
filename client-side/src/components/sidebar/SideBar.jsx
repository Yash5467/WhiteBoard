import React, { useContext, useState } from "react";
import { colorContext } from "../../context/colorContext";
import { Button, ColorSelector, Warning } from "../index";
import {
  faBars,
  faBug,
  faCross,
  faDownload,
  faGift,
  faGuitar,
  faHamburger,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar() {
  const { color, setColor, setStroke, stroke, sheetColor, setSheetColor ,setResetWarning,setImageSelector} =
    useContext(colorContext);
  const colorChoice = ["#4ADE80", "#60A5FA", "#FACC15", "#000000"];
  const sheetColorChoice = ["#FFFFFF", "#FDF8F6", "#FFFCE8", "#F5FAFF"];
  
  const toolMenu = [
    {
      content: "Reset Canvas",
      icon: faTrash,
      action: () => {
        setResetWarning((prev)=>!prev);
      },
    },
    { content: "Export Image", icon: faDownload ,action:()=>{
      setImageSelector((prev)=>!prev);
    }},
  ];
  const socialMenu = [
    { content: "Linked In ", icon: faGift },
    { content: "Github", icon: faGuitar },
    { content: "Report Bug", icon: faBug },
  ];
  const [toolbar, setToolBar] = useState(false);

  return toolbar ? (
   
    <div className=" flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">

      <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className=" mx-5 flex items-center justify-between h-14 border-b">
          <div>Menu Bar</div>
          <div
            className="cursor-pointer"
            onClick={() => setToolBar((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Stroke Color
                </div>
              </div>
            </li>

            <li>
              <span className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600  border-l-4 border-transparent  pr-6">
                <span className="flex gap-2">
                  {colorChoice.map((item) => (
                    <ColorSelector
                      operator={setColor}
                      color={color}
                      key={item}
                      colorCode={item}
                    />
                  ))}
                  <div className="p-1">
                    <input
                      className=" cursor-pointer border h-7 w-7"
                      type="color"
                      onChange={(e) => setColor(e.target.value)}
                      name=""
                      id=""
                      value={color}
                    />
                  </div>
                </span>
              </span>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Stroke
                </div>
              </div>
            </li>
            <li>
              <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <div>
                  <input
                    type="range"
                    value={stroke}
                    min="0"
                    max="15"
                    onChange={(e) => setStroke(e.target.value)}
                  />
                </div>
              </span>
            </li>

            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-500">
                  Sketch Book Background
                </div>
              </div>
            </li>

            <li>
              <div className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="ml-2 text-sm tracking-wide truncate">
                  <div className="flex gap-2">
                    {sheetColorChoice.map((item) => (
                      <ColorSelector
                        key={item}
                        colorCode={item}
                        operator={setSheetColor}
                        color={sheetColor}
                      />
                    ))}
                    <div className="p-1">
                      <input
                        type="color"
                        className="cursor pointer h-7 w-7"
                        value={sheetColor}
                        onChange={(e) => setSheetColor(e.target.value)}
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </span>
              </div>
            </li>
            {toolMenu.map((tool) => (
              <Button
                key={tool.content}
                content={tool.content}
                icon={tool.icon}
                action={tool.action}
              />
            ))}
            <hr className="w-[80%] mx-auto" />
            {socialMenu.map((social) => (
              <Button
                key={social.content}
                content={social.content}
                icon={social.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
 
  ) : (
    <span
      onClick={() => setToolBar((prev) => !prev)}
      className="m-8 absolute cursor-pointer inline-block"
    >
      <FontAwesomeIcon icon={faBars} size="xl" />
    </span>
  );
}

export default SideBar;
