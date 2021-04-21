<<<<<<< HEAD:src/App.js
import React from "react";
import { AppRouter } from "./components/Router";
import { Progress } from "./components/progress/Progress";
import { ConfigProvider } from "antd";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Tabs } from "./components/tabs/Tabs";
import { Header } from "./components/Header";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <ConfigProvider direction="rtl">
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/:name">
              <Nested />
            </Route>
          </Switch>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;

function Nested() {
  return (
    <div className="grid-container">
      <div className="content">
        <AppRouter />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="aside">
        <SideNavBar />
      </div>
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
          src={process.env.PUBLIC_URL + "/img/logo.png"}
        ></img>
      </div>
    </div>
  );
}
=======
import React from "react";
import { AppRouter } from "./components/Router";
import { Progress } from "./components/progress/Progress";
import { ConfigProvider } from "antd";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Tabs } from "./components/tabs/Tabs";
import { Haeder } from "./components/haeder/Haeder";
import SideNavBar from "./components/SideNavBar";

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
            <div className="aside">
              <SideNavBar />
            </div>
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
                src={process.env.PUBLIC_URL + "/img/logo.png"}
              ></img>
            </div>
          </div>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
>>>>>>> ad03699a499057151fdc31f6890a7dd564c6cefc:client/src/App.js
