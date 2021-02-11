import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Login } from "./Login";
import { SideBar } from "./SideBar";

export const RouterApp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/"><Redirect to="/login" /></Route>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={SideBar}></Route>
                    <Route path="*" ><Redirect to="/login" /></Route>
                </Switch>
            </div>
        </Router>
    )
}
