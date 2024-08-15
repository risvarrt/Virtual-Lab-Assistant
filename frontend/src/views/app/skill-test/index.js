import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./styles/style.scss";
const Instructions = React.lazy(() => import("./test"));
const Skills = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/:objId`}
        render={(props) => <Instructions {...props} />}
      />
    </Switch>
  </Suspense>
);
export default Skills;
