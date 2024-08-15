import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "../../../layout/UserLayout";
const CollegeLogin = React.lazy(() => import("./login"));
const College = React.lazy(() => import("./college"));
const AddStudent = React.lazy(() => import("./addStudent"));
const AddStudentExcel = React.lazy(() => import("./addStudExcel"));
const StudReg = React.lazy(() => import("./studentRegister"));
const StaffReg = React.lazy(() => import("./staffRegister"));
const StudLogin = React.lazy(() => import("./studentLogin"));
const StaffLogin = React.lazy(() => import("./staffLogin"));
const AddStaff = React.lazy(() => import("./addStaff"));
const AddStaffExcel = React.lazy(() => import("./addStaffExcel"));
const CollegeRegister = React.lazy(() =>
  import(/* webpackChunkName: "user-reset-password" */ "./register")
);
const CollegeDetails = React.lazy(() =>
  import(/* webpackChunkName: "user-reset-password" */ "./college-details")
);
const CollegeDocs = React.lazy(() =>
  import(/* webpackChunkName: "user-reset-password" */ "./collegeDetails1")
);

const CollegeOtp = React.lazy(() =>
  import(/* webpackChunkName: "user-reset-password" */ "./otp")
);

const User = ({ match }) => {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Route
            path={`${match.url}/dashboard`}
            render={(props) => <College {...props} />}
          />
          <Route
            path={`${match.url}/login`}
            render={(props) => <CollegeLogin {...props} />}
          />
          <Route
            path={`${match.url}/register`}
            render={(props) => <CollegeRegister {...props} />}
          />
          <Route
            path={`${match.url}/addStaff`}
            render={(props) => <AddStaff {...props} />}
          />
          <Route
            path={`${match.url}/staffLogin`}
            render={(props) => <StaffLogin {...props} />}
          />
          <Route
            path={`${match.url}/staffRegister`}
            render={(props) => <StaffReg {...props} />}
          />
          <Route
            path={`${match.url}/studentLogin`}
            render={(props) => <StudLogin {...props} />}
          />
          <Route
            path={`${match.url}/studentRegister`}
            render={(props) => <StudReg {...props} />}
          />
          <Route
            path={`${match.url}/addStaffExcel`}
            render={(props) => <AddStaffExcel {...props} />}
          />
          <Route
            path={`${match.url}/addStudent`}
            render={(props) => <AddStudent {...props} />}
          />
          <Route
            path={`${match.url}/addStudentExcel`}
            render={(props) => <AddStudentExcel {...props} />}
          />
          <Route
            path={`${match.url}/details`}
            render={(props) => <CollegeDetails {...props} />}
          />
          <Route
            path={`${match.url}/docs`}
            render={(props) => <CollegeDocs {...props} />}
          />
          <Route
            path={`${match.url}/otp`}
            render={(props) => <CollegeOtp {...props} />}
          />

          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </UserLayout>
  );
};

export default User;
