import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import UserPageView from "~/hooks/usePageViews";
import { privateRoutes, publicRoutes } from "~/routes";
import Loading from "./components/Loading";
import PrivateRoute from "./components/PrivateRoute";
import routes from "./config/routes";

function App() {
  const user = useSelector((state) => state.auth.login.currentUser);
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Router>
      <Loading />
      <UserPageView />
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout ? route.layout : Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout ? route.layout : Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute auth={{ isAuthenticated: user !== null }}>
                    <Layout>
                      <Page />
                    </Layout>
                  </PrivateRoute>
                }
              />
            );
          })}
          
            <Route
              path="/"
              element={
                <Navigate
                  replace
                  to={user ? routes.home : routes["signup-role"]}
                />
              }
            />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
