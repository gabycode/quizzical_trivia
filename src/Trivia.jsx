import { useState, useEffect } from "react";
import "./Trivia.css";
import Answer from "../components/Answer";
import { decode } from "html-entities";

export default function Trivia({
  question,
  answers,
  correctAnswer,
  onCheckAnswers,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
  }, [answers]);

  // const answersJSX = answers.map((answer, index) => (
  //   <Answer
  //     key={index}
  //     answer={answer}
  //     setSelectedAnswer={setSelectedAnswer}
  //     selectedAnswer={selectedAnswer}
  //     correctAnswer={correctAnswer}
  //     incorrectAnswers={incorrectAnswers}
  //   />
  // ));

  // const shuffleArray = (array) => {
  //   return array.sort(() => Math.random() - 0.5);
  // };

  const answersJSX = shuffledAnswers.map((answer, index) => {
    return (
      <Answer
        key={index}
        answer={answer}
        correctAnswer={correctAnswer}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
      />
    );
  });

  return (
    <>
      <div className="trivia">
        <h1 className="trivia-question">{decode(question)}</h1>
        <div className="answers">{answersJSX}</div>
        {/* {selectedAnswer && (
          <p className={`answer-result ${isCorrect ? "correct" : "incorrect"}`}>
            {isCorrect ? "Correct" : "Incorrect"}
          </p>
        )} */}
      </div>
    </>
  );
}
