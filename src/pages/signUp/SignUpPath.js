import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Signup from "./Signup";
import Worlds from "../worlds/Worlds";
import Cities from "../Cities/Cities";
import Avatars from "../avatars/Avatars";

const SignUpPath = () => {
  return (
    <Switch>
      <Route path={"/signup"} exact>
        <Signup />
      </Route>
      <Route path={"/signup/worlds"}>
        <Worlds />
      </Route>
      <Route path={"/signup/cities"}>
        <Cities />
      </Route>
      <Route path={"/signup/avatars"}>
        <Avatars />
      </Route>
    </Switch>
  );
};

export default SignUpPath;
