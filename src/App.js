import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import MainDash from "./Components/MainDash/MainDash";
import "./App.css";
import RightSide from "./RightSide/RightSide";

const App = () => {
  return (
    <div className="App">
      <div className="app-glass">
        <SideBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};

export default App;
