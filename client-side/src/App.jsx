import { useState } from "react";
import "./App.css";
import { Board,  SideBar } from "./components";
import { ColorContextProvider } from "./context/colorContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="check" >
      <ColorContextProvider>
        <SideBar />
        <Board />
    
      </ColorContextProvider>
    </div>
  );
}

export default App;
