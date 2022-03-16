import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Routes } from "./Components/routes/Routes";
import { AuthLayout } from "./Components/AuthLayout/AuthLayout";
import {store} from "./Store";
function App() {
  return (
    <Router history={store.windowHistory.history}>
      <>
        <Switch>
          <Route path="/home" exact={false} component={AuthLayout}/>
          <Routes routeType="unAuth"/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
