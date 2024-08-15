import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../styles/style.scss";
const Instructions = React.lazy(() => import("./instruction"));
const Play = React.lazy(() => import("./quiz/Play"));
const Play2 = React.lazy(() => import("./codingquiz/Play"));
const Summary2 = React.lazy(() => import("./codingquiz/QuizSummary"));
const Summary = React.lazy(() => import("./quiz/QuizSummary"));
const Correction = React.lazy(() => import("./Correction"));
const PaperCorrect = React.lazy(() => import("./papercorrect"));
const Skills = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        exact path={`${match.url}/test`}
        render={(props) => <Instructions {...props} />}
      />
      <Route
        exact path={`${match.url}/test/coding/mcq`}
        render={(props) => <Play {...props} />}
      />
      <Route
        exact path={`${match.url}/test/coding`}
        render={(props) => <Play2 {...props} />}
      />
      <Route
        exact path={`${match.url}/test/coding/summary`}
        render={(props) => <Summary2 {...props} />}
      />
      <Route
        exact path={`${match.url}/test/coding/mcq/summary`}
        render={(props) => <Summary {...props} />}
      />
      <Route
        exact path={`${match.url}/correction`}
        render={(props) => <Correction {...props} />}
      />
      <Route
        exact path={`${match.url}/correction/papercorrect`}
        render={(props) => <PaperCorrect {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Skills;
