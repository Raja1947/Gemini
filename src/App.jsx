import { useState } from "react";

import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import Main from "./component/main/Main";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <Main/>
    
    </div>
  );
}

export default App;
