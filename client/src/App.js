import React, { useEffect }  from "react";
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


import { useSelector, useDispatch } from "react-redux";
import { selectLoading, getUser } from "./features/user/userSlice";

function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    console.log('useEffect');
    dispatch(getUser());

  }, []);


  if (loading===true) {
    return <div>Waiting for user/config</div>;
  }
  else {

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
