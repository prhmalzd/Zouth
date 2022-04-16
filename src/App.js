import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import SignUpPath from "./pages/signUp/SignUpPath";
import Timeline from "./pages/timeline/Timeline";

function App() {
  return (
    <Switch>
      <Route path="/zouth" exact>
        <Redirect to="/homepage" />
      </Route>
      <Route path="/homepage">
        <HomePage />
      </Route>
      <Route path="/signup">
        <SignUpPath />
      </Route>
      <Route path="/timeline">
        <Timeline />
      </Route>
    </Switch>
  );
}

export default App;
