import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
      score: 0,
      max_score: 0
    };
  }

  componentDidMount() {
    console.log(this.props)
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: state.score,
                max_score: state.max_score,
                percent: (state.score / state.max_score) * 100
            });
        }
  }

  render() {
    const { state } = this.props.location;
    let stats, remark;
    const userScore = this.state.percent;

    if (userScore <= 30) {
      remark = "You need more practice!";
    } else if (userScore > 30 && userScore <= 50) {
      remark = "Better luck next time!";
    } else if (userScore <= 70 && userScore > 50) {
      remark = "You can do better!";
    } else if (userScore >= 71 && userScore <= 84) {
      remark = "You did great!";
    } else {
      remark = "You're an absolute genius!";
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <center>
          <div style={{ textAlign: "center" }}>
            <span className="mdi mdi-check-circle-outline success-icon"></span>
          </div>
          <h1>Quiz has ended</h1>
          <div className="skill-container skill-stats">
            <h4>{remark}</h4>
            <h2>Your Score: {this.state.percent.toFixed(0)}&#37;</h2>
            <span className="stat left">Marks Secured: </span>
            <span className="right">{this.state.score}</span>
            <br />
            <span className="stat left">Maximum Marks: </span>
            <span className="right">
              {this.state.max_score}
            </span>
            <br />
          </div>
          <section>
            <ul>
              <li>
                <Link to="/app">Back to Home</Link>
              </li>
            </ul>
          </section>
          </center>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="skill-no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link
                to={`/app/${
                  sessionStorage.getItem("role") === "STUDENT"
                    ? "students"
                    : sessionStorage.getItem("role") === "JOB_SEEKERS"
                    ? "candidates"
                    : null
                }/profile/skill-test/play-quiz/${
                  this.props.match.params.skillID
                }/${this.props.match.params.level}`}
              >
                Take a Quiz
              </Link>
            </li>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Summary</title>
        </Helmet>
        <div className="skill-quiz-summary">{stats}</div>
      </Fragment>
    );
  }
}

export default QuizSummary;
