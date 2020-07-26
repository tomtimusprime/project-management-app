import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Layout from "./Components/Layout/Layout";
import Page2 from './Components/pages/Page2/Page2'
import Page3 from './Components/pages/Page3/Page3'
function App() {
  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path='/page2' component={Page2} />
            <Route exact path='/page3' component={Page3} />
            <Route component='NoMatch' />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
