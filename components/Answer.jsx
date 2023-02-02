import { useEffect, useState } from "react";
import "../src/Trivia.css";
import { decode } from "html-entities";

const Answer = ({
  answer,
  setSelectedAnswer,
  selectedAnswer,
  correctAnswer,
  onCheckAnswers,
}) => {
  const [isCorrect, setIsCorrect] = useState(false);

  function checkAnswers() {
    if (selectedAnswer === correctAnswer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  }

  checkAnswers();

  return (
    <div
      className={`trivia-answers ${
        answer === selectedAnswer ? "selected" : ""
      }`}
      onClick={() => {
        setSelectedAnswer(answer);
        checkAnswers;
      }}
    >
      {decode(answer)}
    </div>
  );
};

export default Answer;
