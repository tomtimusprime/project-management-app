import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./utils/history";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Loading from "./components/Loading/Loading";
import Layout from "./components/Layout/Layout";
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Profile} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;

// <Route path="/profile" component={Profile} />