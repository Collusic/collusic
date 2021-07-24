import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/main";
import Home from "./page/home";
import NavBar from "./page/nav_bar";
import DetailProject from "./page/detailProject";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <NavBar></NavBar>
      </Switch>
      <Switch>
        <Route exact path="/main">
          <Main></Main>
        </Route>
        <Route exact path="/project">
          <DetailProject></DetailProject>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
