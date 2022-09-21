import logo from "./logo.svg";
import "./App.css";
import Signup from "./signup/signup";
import Layout from "./dashboard/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signin from "./signup/signin";

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Layout /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Dashboard" component={Layout} />
          <Route exact path="/Accelerator" component={Layout} />
          <Route exact path="/Accelerator/LoanAccelerator" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
