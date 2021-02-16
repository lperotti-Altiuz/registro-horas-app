import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./context/context";
import { Details } from "./hours/Details";
import { Projects } from "./hours/Projects";
import { Login } from "./Login";
import { SideBar } from "./SideBar";

const LoginContainer = () => (
  <div>
    <Route exact path="/login" component={Login}></Route>
  </div>
);

const privateContainer = () => (
  <div>
    <SideBar />
    <Route exact path="/details" component={Details}></Route>
    <Route exact path="/projects" component={Projects}></Route>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route component={notFound}></Route>
  </div>
);

const notFound = () => <div>404</div>;

export const RouterApp = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer}></Route>
          <Route path="/dashboard" component={privateContainer}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
