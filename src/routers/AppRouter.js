import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import Fiber from "../pages/fiber/Fiber";

export default class AppRouter extends React.Component{

    render(){

        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/fiber' component={Fiber} />
                    <Route path='*' component={() => { return(<h1>404 NOT FOUND</h1>) } } />
                </Switch>
            </Router>
        );
    }
}

