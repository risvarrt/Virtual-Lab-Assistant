import React, { Component } from "react";
import "./styles/components/Card.scss";
const Card = (props) => {
  return (
    <div className="skill-first">
      <div class="skill-card">
        <div class="skill-card-text">
          <h2 class="head">Beginner</h2>
          <span class="info">MCQ-quiz</span>
        </div>
        <div class="skill-card-stats">
          <div class="stat">
            <div class="value">40</div>
            <div class="type">minutes</div>
          </div>
          <div class="stat border">
            <div class="value">50</div>
            <div class="type">questions</div>
          </div>
          <div class="stat">
            <div class="value">100</div>
            <div class="type">Marks</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
