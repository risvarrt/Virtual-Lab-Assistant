import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, questions } = props;

  const containerStyles = {
    height: 5,
    width: "75%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
    marginTop: 15,
  };
  let anew = (completed / questions) * 100 + (1 / questions) * 100;
  const fillerStyles = {
    height: "100%",
    width: `${anew}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    transition: "width 1s ease-in-out",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};
// {`${completed+1}/${questions}`}

export default ProgressBar;
