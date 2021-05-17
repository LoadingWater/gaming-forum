import React from "react";
import { VStack } from "@chakra-ui/layout";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LoginPage from "./components/page/login/Login";
import SignUpPage from "./components/page/sign-up/SignUp";
import Header from "./components/shared/Header";

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
