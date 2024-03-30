import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "~/routes";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
 
  return (
    <Router>
      <Loading />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
