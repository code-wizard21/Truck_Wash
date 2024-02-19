import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Route } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

import PageLayout from "../components/layout";

import { ROUTES_CONSTANTS } from "./rotueConstant";

function RoutesDefined() {
  return (
    <Router>
      <PageLayout>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            {ROUTES_CONSTANTS.map(({ path, element }) => {
              return <Route key={path} exact path={path} element={element} />;
            })}
          </Routes>
        </Suspense>
      </PageLayout>
    </Router>
  );
}

export default RoutesDefined;
