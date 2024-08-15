import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "../../../layout/UserLayout";

const Staff = React.lazy(() => import("./staff"));
const Class = React.lazy(() => import("./class"));

const User = ({ match }) => {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Route
            path={`${match.url}/dashboard`}
            render={(props) => <Staff {...props} />}
          />         
          <Route
            path={`${match.url}/create_class`}
            render={(props) => <Class {...props} />}
          />
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </UserLayout>
  );
};

export default User;
