import { useState } from "react";
import "./Trivia.css";
import Answer from "../components/Answer";

export default function Trivia({ question, answers }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const answersJSX = answers.map((answer, index) => (
    <Answer
      key={index}
      answer={answer}
      setSelectedAnswer={setSelectedAnswer}
      selectedAnswer={selectedAnswer}
    />
  ));

  return (
    <div className="trivia">
      <h1 className="trivia-question">{question}</h1>
      <div className="answers">{answersJSX}</div>
    </div>
  );
}
