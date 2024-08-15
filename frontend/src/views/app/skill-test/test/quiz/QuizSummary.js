import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     score: 0,
  //     numberOfQuestions: 0,
  //     numberOfAnsweredQuestions: 0,
  //     correctAnswers: 0,
  //     wrongAnswers: 0,
  //     // hintsUsed: 0,
  //     // fiftyFiftyUsed: 0
  //   };
  // }


  render() {
    const { state } = this.props.location;
    let stats, remark;
    // const userScore = this.state.score;

    // if (userScore <= 30) {
    //   remark = "You need more practice!";
    // } else if (userScore > 30 && userScore <= 50) {
    //   remark = "Better luck next time!";
    // } else if (userScore <= 70 && userScore > 50) {
    //   remark = "You can do better!";
    // } else if (userScore >= 71 && userScore <= 84) {
    //   remark = "You did great!";
    // } else {
    //   remark = "You're an absolute genius!";
    // }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <center>
          <div style={{ textAlign: "center" }}>
            <span className="mdi mdi-check-circle-outline success-icon"></span>
          </div>
          <h1>Your Lab Exam has ended</h1>
          {/* <div className="skill-container skill-stats">
            <h4>{remark}</h4>
            <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
            <span className="stat left">Total number of questions: </span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Number of attempted questions: </span>
            <span className="right">
              {this.state.numberOfAnsweredQuestions}
            </span>
            <br />
            <span className="stat left">Number of Correct Answers: </span>
            <span className="right">{this.state.correctAnswers}</span> <br />
            <span className="stat left">Number of Wrong Answers: </span>
            <span className="right">{this.state.wrongAnswers}</span>
            <br />
          </div> */}
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
                  localStorage.getItem("role") === "STUDENT"
                    ? "students"
                    : localStorage.getItem("role") === "JOB_SEEKERS"
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
