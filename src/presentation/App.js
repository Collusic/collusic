import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/main";
import Home from "./page/home";
import NavBar from "./molecule/nav_bar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <NavBar path="/"></NavBar>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/project">
          <Main></Main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
