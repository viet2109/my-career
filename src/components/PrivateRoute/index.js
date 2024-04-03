import { Navigate } from "react-router-dom";
import routes from "~/config/routes";

PrivateRoute.propTypes = {};

function PrivateRoute({ auth: { isAuthenticated }, children }) {
  return <>{isAuthenticated ? children : <Navigate to={routes.signin} />};</>;
}

export default PrivateRoute;
