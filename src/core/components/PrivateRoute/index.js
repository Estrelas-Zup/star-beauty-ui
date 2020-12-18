import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = true || localStorage.getItem('authData');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;