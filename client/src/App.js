import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./utils/history";
import { useAuth0 } from "@auth0/auth0-react";
import { Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Home/components/Profile/Profile"
import Projects from './components/Projects/Projects'
import Loading from "./components/Loading/Loading";
import Layout from "./components/Layout/Layout";
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route  path="/projects" component={Projects} />
          <Route exact path="/" component={Profile} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

// <Route path="/profile" component={Profile} />