import React from "react";
import { AppRouter } from "./components/Router";
import { Progress } from "./components/progress/Progress";
import { ConfigProvider } from "antd";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Tabs } from "./components/tabs/Tabs";
import { Haeder } from "./components/haeder/Haeder";

function App() {
  return (
    <ConfigProvider direction="rtl">
      <div className="App">
        <Router>
          <div className="grid-container">
            <div className="content">
              <AppRouter />
            </div>
            <div className="haeder">
              <Haeder />
            </div>
            <div className="aside"></div>
            <div className="logo">
              <img className="logo-img" src="./logo.png"></img>
            </div>
          </div>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
