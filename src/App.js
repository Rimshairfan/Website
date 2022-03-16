import React from "react";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Routes } from "./Components/routes/Routes";
import { AuthLayout } from "./Components/AuthLayout/AuthLayout";
import {store} from "./Store";
function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/home" exact={false} component={AuthLayout}/>
          <Routes routeType="unAuth"/>
        </Switch>
      </>
      </BrowserRouter>

  );
}

export default App;
