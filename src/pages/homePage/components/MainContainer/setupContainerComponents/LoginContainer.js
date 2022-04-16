import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import Resetpass from "./Resetpass";

const LoginContainer = (props) => {
  return (
    <Switch>
      <Route path={"/homepage"} exact>
        <LoginPage />
      </Route>
      <Route path={"/homepage/resetpassword"}>
        <Resetpass />
      </Route>
    </Switch>
  );
};

export default LoginContainer;
