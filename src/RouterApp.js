import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { UserContext } from "./hooks/UserContext";
import { Login } from "./Login";
import { SideBar } from "./SideBar";



export const RouterApp = () => {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{user,setUser}}>
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
        </UserContext.Provider>

    )
}
