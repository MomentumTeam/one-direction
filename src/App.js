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
              <div className="app-name">
                <p className="first-word">
                  my<strong className="second-word">one</strong>
                </p>
              </div>
              <img
                className="logo-img"
                src={process.env.PUBLIC_URL + "/img/among_us_hd.png"}
              ></img>

              <img
                className="inner-image"
                src={process.env.PUBLIC_URL + "/img/oneAmenLogo.png"}
              ></img>
            </div>
          </div>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
