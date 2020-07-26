import React, { Component } from "react";

import LoginButton from './Components/LoginButton/LoginButton'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home/Home'
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' component={Home}></Route>
      </Switch>
    </Router>
    <LoginButton />
    </>
  );
}


export default App;
