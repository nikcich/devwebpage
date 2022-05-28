import {
    BrowserRouter,
    Switch,
    Route,
    useHistory,
    withRouter,
    useLocation
  } from "react-router-dom";

  import React from 'react';
  
  import HomePage from './HomePage';
  import Resume from './Resume';
  import SideBar from './SideBar';
  import Test from './Test';
  import {useEffect, useState} from 'react';
  import Projects from './Projects';

function Routes() {


    return (
        <div style={{minHeight: '100vh', background: '#262626'}}>
            <SideBar />
            <Switch>
                <Route path="/projects">
                    <Projects />
                </Route>

                <Route path="/github" component={() => {
                    window.location.href = 'https://github.com/nikcich';
                    return null;
                }}> 
                    
                </Route>

                <Route path="/linkedin" component={() => {
                    window.location.href = 'https://www.linkedin.com/in/nikolas-cichosz/';
                    return null;
                }}>
                </Route>

                <Route path="/resume">
                    <Resume />
                </Route>

                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;