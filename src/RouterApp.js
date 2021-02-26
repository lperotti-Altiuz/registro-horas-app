import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./hooks/LoginContext";
import { Details } from "./hours/Details";
import { Projects } from "./hours/Projects";
import { Statistics } from "./hours/Statistics";
import { Login } from "./Login";
import { SideBar } from "./SideBar";

const LoginContainer = () => (
  <div>
    <Route path="/login" component={Login}></Route>
  </div>
);

const notFound = () => (
  <div style={{ marginLeft: 800, marginTop: 400 }}>404</div>
);

const privateContainer = () => (
  <div>
    <SideBar />
    <Switch>
      <Route path="/dashboard/details" component={Details}></Route>
      <Route path="/dashboard/projects" component={Projects}></Route>
      <Route path="/dashboard/statistics" component={Statistics}></Route>
      <Route path="/dashboard" component={Projects}></Route>
    </Switch>
  </div>
);

export const RouterApp = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginContainer}></Route>
          <Route path="/dashboard" component={privateContainer}></Route>
          <Redirect exact from="/" to="/login"></Redirect>
          <Route component={notFound}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
