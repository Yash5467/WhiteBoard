import React, { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorContext } from "../../context/colorContext";
import socketIO from "socket.io-client";
import {
  faArrowPointer,
  faArrowRight,
  faCircle,
  faEraser,
  faHand,
  faLock,
  faPencil,
  faSquare,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Warning, ImageInput, CollabrateWindow } from "../index";

function Board() {
  const canvasRef = useRef();
  const contextRef = useRef();
  const {
    color,
    setColor,
    stroke,
    sheetColor,
    resetWarning,
    imageSelector,
    connectionWindow,
    setConnectionWindow,
    broadcasting,
    isReciver,
    reciverId
  } = useContext(colorContext);
  const [isDrawing, setIsDrawing] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    contextRef.current = context;
    const socket = socketIO.connect("/api");
    socketRef.current = socket;

    socketRef.current.on("update", (data) => {
      if(isReciver && data.reciverId==reciverId )
      socketDraw(data);  
    });

    socketRef.current.on("mouseDown", (data) => {
      if(isReciver && data.reciverId==reciverId)
      socketDown(data);
    });
  }, [sheetColor,isReciver,reciverId]);

  const onMouseDown = ({ nativeEvent }) => {
    contextRef.current.lineWidth = stroke;
    contextRef.current.strokeStyle = color;
    const { offsetX, offsetY } = nativeEvent;
    console.log(offsetX,offsetY);
    if(broadcasting)
    socketRef.current.emit("mouseDown", { stroke, color, offsetX, offsetY,reciverId });
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const socketDown = ({ offsetX, offsetY, color, stroke }) => {
    contextRef.current.lineWidth = stroke;
    contextRef.current.strokeStyle = color;
    contextRef.current.beginPath(offsetX, offsetY);
    contextRef.current.moveTo(offsetX, offsetY);
  };
  const onMouseUp = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    if(broadcasting)
    socketRef.current.emit("update", { offsetX, offsetY , reciverId });
      
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const socketDraw = ({ offsetX, offsetY }) => {
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  return (
    <div key={sheetColor} style={{ backgroundColor: sheetColor }}>
      <div>
        <Warning key={resetWarning} z={`${resetWarning ? "1" : "-1"}`} />
      </div>
      <div className={`${imageSelector ? "" : "hidden"}`}>
        <ImageInput key={imageSelector} z={`${imageSelector ? "2" : "-2"}`} />
      </div>
      <div
        className={` ${
          connectionWindow ? "" : "hidden"
        } h-full  absolute w-full flex justify-center items-center backdrop-blur-md "`}
      >
        <CollabrateWindow />
      </div>
      <div
        onClick={() => setConnectionWindow((prev) => !prev)}
        className="absolute z-10 right-10 top-10 bg-[#6965DB] p-2 cursor-pointer rounded-lg "
      >
        <span className="invert">
          <FontAwesomeIcon size="lg" icon={faUsers} />
        </span>
      </div>
      <div className="flex h-full justify-center gap-7  ">
        <div className="flex h-full justify-center gap-7  mt-5 bg-white shadow-lg rounded-lg border border-gray-200 p-2">
          <div>
            <span className="cursor-pointer" onClick={() => setcolor("lock")}>
              <FontAwesomeIcon className="invert-0" icon={faLock} />
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faHand} />
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faArrowPointer} />
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faSquare} />
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faCircle} />
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <div>
            <span
              className="cursor-pointer"
              onClick={() => setColor("#000000")}
            >
              <FontAwesomeIcon icon={faPencil} />
            </span>
          </div>
          <div onClick={() => setColor(sheetColor)}>
            <span className="cursor-pointer">
              <FontAwesomeIcon icon={faEraser} />
            </span>
          </div>
        </div>
      </div>
      <canvas
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default Board;
