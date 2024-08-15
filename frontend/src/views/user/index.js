import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "../../layout/UserLayout";
const College = React.lazy(() => import("./college"));
const Staff = React.lazy(() => import("./staff"));
const Student = React.lazy(() => import("./student"));
const User = ({ match }) => {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          
          <Route
            path={`${match.url}/colleges`}
            render={(props) => <College {...props} />}
          />
          <Route
            path={`${match.url}/staff`}
            render={(props) => <Staff {...props} />}
          />
          <Route
            path={`${match.url}/student`}
            render={(props) => <Student {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </UserLayout>
  );
};

export default User;
