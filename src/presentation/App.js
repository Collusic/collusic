import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/main";
import Home from "./page/home";
import NavBar from "./page/nav_bar";
import DetailProject from "./page/detailProject";
import CreateContributeProject from "./page/createContributeProject";
import Create from "./page/create";

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
        <Route exact path="/requestprojects">
          <Main></Main>
        </Route>
        <Route exact path="/requestprojects/:id">
          <DetailProject></DetailProject>
        </Route>
        <Route exact path="/requestprojects/:id/comments">
          <CreateContributeProject></CreateContributeProject>
        </Route>
        <Route exact path="/create">
          <Create></Create>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
