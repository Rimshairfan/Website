import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Routes } from "./Components/routes/Routes";
import { AuthLayout } from "./Components/AuthLayout/AuthLayout";
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
