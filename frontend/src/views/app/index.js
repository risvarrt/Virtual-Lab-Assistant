import React, { Component, Suspense } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ "./gogo")
);
const Classes = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ "./classes")
);
const ClassDetails = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ "./classDetails")
);
const StudentClasses = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ "./studentclasses")
);
const StudentClassDetails = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ "./studentclassDetails")
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ "./second-menu")
);
const Assessment = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ "./assessment")
);
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ "./blank-page")
);
const SkillTest = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ "./skill-test")
);
const ManageStudents = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ "./manageStudents")
);
const ManageStaff = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ "./manageStaff")
);
class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/second-menu`}
              />
              <Route
                path={`${match.url}/create_assessment`}
                render={(props) => <Assessment {...props} />}
              />
              <Route
                path={`${match.url}/classes`}
                render={(props) => <Classes {...props} />}
              />
              <Route
                path={`${match.url}/class_details`}
                render={(props) => <ClassDetails {...props} />}
              />
               <Route
                path={`${match.url}/student_classes`}
                render={(props) => <StudentClasses {...props} />}
              />
               <Route
                path={`${match.url}/student_class_details`}
                render={(props) => <StudentClassDetails {...props} />}
              />
              <Route
                path={`${match.url}/${
                  sessionStorage.getItem("role") === "STUDENT"
                    ? "students"
                    : sessionStorage.getItem("role") === "JOB_SEEKER"
                    ? "candidates"
                    : "null"
                }`}
                render={(props) => <Gogo {...props} />}
              />
              <Route
                path={`${match.url}/second-menu`}
                render={(props) => <SecondMenu {...props} />}
              />
              <Route
                path={`${match.url}/assessment`}
                render={(props) => <SkillTest {...props} />}
              />
              <Route
                path={`${match.url}/blank-page`}
                render={(props) => <BlankPage {...props} />}
              />
              <Route
                path={`${match.url}/manageStudents`}
                render={(props) => <ManageStudents {...props} />}
              />
              <Route
                path={`${match.url}/manageStaff`}
                render={(props) => <ManageStaff {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
