import { useState } from "react";
import "../src/Trivia.css";

export default function CheckAnswersBtn({ triviaJSX }) {
  const [correctAnswer, setCorrectAnswer] = useState("Cheetah");

  // console.log(triviaArr);

  function handleClick() {
    console.log("checking answers");
    const triviaArr = triviaJSX.map((t) => {
      if (correctAnswer === t.props.correctAnswer) {
        console.log("correct answer");
      } else if (correctAnswer !== t.props.correctAnswer) {
        console.log("incorrect answer");
      } else {
        console.log("not answered");
      }
    });
  }

  return (
    <div className="btn-container">
      <button className="check-answers-btn" onClick={handleClick}>
        Check answers
      </button>
    </div>
  );
}
