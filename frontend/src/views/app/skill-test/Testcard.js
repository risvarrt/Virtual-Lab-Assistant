import React from "react";
import "./styles/components/TestCard.scss";
import { Link } from "react-router-dom";

const Testcard = (props) => {
  const { key } = props;
  console.log(key);
  return (
    // <div class="wrapper-flex">
    <div className="skill-containerq">
      <span className="skill-name">
        <Link
          className="skill-boo"
          to={`/app/${
            sessionStorage.getItem("role") === "STUDENT"
              ? "students"
              : sessionStorage.getItem("role") === "JOB_SEEKERS"
              ? "candidates"
              : null
          }/profile/skill-test/play-quiz/${props.skillID}/${props.level}`}
        >
          Quiz-{key}
        </Link>
      </span>
      <i className="fa fa-ellipsis-h skill-foo" aria-hidden="true"></i>
      {/* <button class='btn'>Follow</button> */}
    </div>
    // </div>
  );
};

export default Testcard;
