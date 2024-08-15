import React, { Component } from "react";
// import Card from './Card';
import "./styles/components/Card.scss";
import Testcard from "./Testcard";

var number = [0, 0, 0, 0];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    };
  }

  operation1() {
    // console.log(this.state.show)
    this.setState({
      show1: !this.state.show1,
    });
  }
  operation2() {
    // console.log(this.state.show)
    this.setState({
      show2: !this.state.show2,
    });
  }
  operation3() {
    // console.log(this.state.show)
    this.setState({
      show3: !this.state.show3,
    });
  }
  operation4() {
    // console.log(this.state.show)
    this.setState({
      show4: !this.state.show4,
    });
  }
  deletequiz = (i) => {
    if (number[i] > 0) {
      number[i] = number[i] - 1;
      this.setState({
        show1: true,
        show2: true,
        show3: true,
        show4: true,
      });
    }
  };
  addquiz = (i) => {
    number[i] = number[i] + 1;
    this.setState({
      show1: true,
      show2: true,
      show3: true,
      show4: true,
    });
  };
  render() {
    return (
      <div id="home">
        <div className="skill-first">
          <div className="skill-card" id="one">
            <div className="skill-card-text">
              <div className="skill-card-buts">
                <button
                  className="skill-but2"
                  on
                  onClick={() => this.addquiz(0)}
                >
                  <i className="simple-icon-plus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but3"
                  on
                  onClick={() => this.deletequiz(0)}
                >
                  <i className="simple-icon-minus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but1"
                  onClick={() => this.operation1()}
                >
                  <i className="simple-icon-eye" aria-hidden="true"></i>
                </button>
              </div>
              <h2 class="head">Beginner</h2>
              <span class="info">MCQ-quiz</span>

              {/* <button ></button> */}
            </div>
            <div className="skill-card-stats">
              <div className="stat">
                <div className="value">40</div>
                <div className="type">minutes</div>
              </div>
              <div className="stat border">
                <div className="value">50</div>
                <div className="type">questions</div>
              </div>
              <div className="stat">
                <div className="value">100</div>
                <div className="type">Marks</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {this.state.show1 ? (
          <div className="begin">
            <div className="skill-wrapper-flex">
              {number[0] > 0 ? (
                [...Array(number[0])].map((El, idx) => (
                  <Testcard
                    key={idx}
                    level={"beginner"}
                    skillID={this.props.match.params.skillID}
                  />
                ))
              ) : (
                <h1>No questions</h1>
              )}
            </div>
          </div>
        ) : null}
        <hr />
        <div className="skill-first">
          <div className="skill-card" id="two">
            <div className="skill-card-text">
              <div className="skill-card-buts">
                <button
                  className="skill-but2"
                  on
                  onClick={() => this.addquiz(1)}
                >
                  <i class="simple-icon-plus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but3"
                  on
                  onClick={() => this.deletequiz(1)}
                >
                  <i class="simple-icon-minus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but1"
                  onClick={() => this.operation2()}
                >
                  <i class="simple-icon-eye" aria-hidden="true"></i>
                </button>
              </div>
              <h2 className="head">Advanced</h2>
              <span className="info">MCQ-quiz</span>
            </div>
            <div className="skill-card-stats">
              <div className="stat">
                <div className="value">40</div>
                <div className="type">minutes</div>
              </div>
              <div className="stat border">
                <div className="value">50</div>
                <div className="type">questions</div>
              </div>
              <div className="stat">
                <div className="value">100</div>
                <div className="type">Marks</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {this.state.show2 ? (
          <div className="adv">
            <div className="skill-wrapper-flex">
              {number[1] > 0 ? (
                [...Array(number[1])].map((El, idx) => (
                  <Testcard
                    level={"Advance"}
                    skillID={this.props.match.params.skillID}
                    key={idx}
                  />
                ))
              ) : (
                <h1>No questions</h1>
              )}
            </div>
          </div>
        ) : null}
        <hr />
        <div className="skill-first">
          <div className="skill-card" id="three">
            <div className="skill-card-text">
              <div className="skill-card-buts">
                <button
                  className="skill-but2"
                  on
                  onClick={() => this.addquiz(2)}
                >
                  <i class="simple-icon-plus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but3"
                  on
                  onClick={() => this.deletequiz(2)}
                >
                  <i class="simple-icon-minus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but1"
                  onClick={() => this.operation3()}
                >
                  <i class="simple-icon-eye" aria-hidden="true"></i>
                </button>
              </div>
              <h2 className="head">Expert</h2>
              <span className="info">MCQ-quiz</span>
            </div>
            <div className="skill-card-stats">
              <div className="stat">
                <div className="value">40</div>
                <div className="type">minutes</div>
              </div>
              <div className="stat border">
                <div className="value">50</div>
                <div className="type">questions</div>
              </div>
              <div className="stat">
                <div className="value">100</div>
                <div className="type">Marks</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {this.state.show3 ? (
          <div className="exp">
            <div className="skill-wrapper-flex">
              {number[2] > 0 ? (
                [...Array(number[2])].map((El, idx) => (
                  <Testcard
                    level={"Expert"}
                    skillID={this.props.match.params.skillID}
                    key={idx}
                  />
                ))
              ) : (
                <h1>No questions</h1>
              )}
            </div>
          </div>
        ) : null}
        <hr />
        <div className="skill-first">
          <div class="skill-card" id="four">
            <div className="skill-card-text">
              <div className="skill-card-buts">
                <button
                  className="skill-but2"
                  on
                  onClick={() => this.addquiz(3)}
                >
                  <i class="simple-icon-plus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but3"
                  on
                  onClick={() => this.deletequiz(3)}
                >
                  <i class="simple-icon-minus" aria-hidden="true"></i>
                </button>
                <button
                  className="skill-but1"
                  onClick={() => this.operation4()}
                >
                  <i class="simple-icon-eye" aria-hidden="true"></i>
                </button>
              </div>
              <h2 className="head">Master</h2>
              <span className="info">MCQ-quiz</span>
            </div>
            <div className="skill-card-stats">
              <div className="stat">
                <div className="value">40</div>
                <div className="type">minutes</div>
              </div>
              <div className="stat border">
                <div className="value">50</div>
                <div className="type">questions</div>
              </div>
              <div className="stat">
                <div className="value">100</div>
                <div className="type">Marks</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {this.state.show4 ? (
          <div className="master">
            <div className="skill-wrapper-flex">
              {number[3] > 0 ? (
                [...Array(number[3])].map((El, idx) => (
                  <Testcard
                    level={"Master"}
                    skillID={this.props.match.params.skillID}
                    key={idx}
                  />
                ))
              ) : (
                <h1>No questions</h1>
              )}
            </div>
          </div>
        ) : null}
        <hr />
      </div>
    );
  }
}
export default Home;
