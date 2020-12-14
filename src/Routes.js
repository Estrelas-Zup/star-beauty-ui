import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./core/components/PrivateRoute";
import Login from './pages/Auth/Login';
import MakeSchedule from "./pages/Customer/MakeSchedule";
import Home from './pages/Home';
import Scheduling from './pages/ServiceProvider/Scheduling';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/agendamentos">
          <Scheduling />
        </PrivateRoute>
        <PrivateRoute path="/fazer-agendamento">
          <MakeSchedule />
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch >
    </Router>
  )
}

export default Routes;