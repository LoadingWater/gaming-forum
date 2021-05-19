import React from "react";
import { VStack } from "@chakra-ui/layout";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LoginPage from "./components/page/login/Login";
import SignUpPage from "./components/page/sign-up/SignUp";
import Header from "./components/shared/Header";
import { ServiceState } from "./context/http-service/ServiceState";

function App() {
  return (
    <Router>
      <Header />
      <ServiceState>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
        </Switch>
      </ServiceState>
    </Router>
  );
}

export default App;
