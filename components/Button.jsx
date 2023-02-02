import { useState } from "react";
import "../src/Trivia.css";

export default function CheckAnswersBtn({ triviaData }) {
  const checkAnswers = () => {
    console.log("checking answers");
  };

  return (
    <div className="btn-container">
      <button className="check-answers-btn">Check answers</button>
    </div>
  );
}
