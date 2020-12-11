import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import Scheduling from './pages/ServiceProvider/Scheduling';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/scheduling">
          <Scheduling />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch >
    </Router>
  )
}

export default Routes;