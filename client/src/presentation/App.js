import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./page/main";
import { NavBar } from "./molecule/nav_bar";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <section id="main-section">
        <Switch>
          <Route path="/">
            <Main></Main>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
