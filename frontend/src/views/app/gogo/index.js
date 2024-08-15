import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const StudentAdditionalInfo = React.lazy(() =>
  import("./student_profile_addinfo")
);
const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      {sessionStorage.getItem("role") === "STUDENT" ||
      sessionStorage.getItem("role") === "JOB_SEEKER" ? (
        <Route
          path={`${match.url}/profile/:${sessionStorage.getItem("user_id")}`}
          render={(props) => <StudentAdditionalInfo {...props} />}
        />
      ) : (
        <Redirect to="/error" />
      )}
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
