// import { useState, useEffect } from "react";
// import "./Trivia.css";
// import Answer from "../components/Answer";
// import { decode } from "html-entities";

// export default function Trivia({
//   question,
//   answers,
//   correctAnswer,
//   onCheckAnswers,
// }) {
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [shuffledAnswers, setShuffledAnswers] = useState([]);

// useEffect(() => {
//   setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
// }, [answers]);

//   const answersJSX = shuffledAnswers.map((answer, index) => {
//     return (
//       <Answer
//         key={index}
//         answer={answer}
//         correctAnswer={correctAnswer}
//         setSelectedAnswer={setSelectedAnswer}
//         selectedAnswer={selectedAnswer}
//       />
//     );
//   });

//   return (
//     <>
//       <div className="trivia">
//         <h1 className="trivia-question">{decode(question)}</h1>
//         <div className="answers">{answersJSX}</div>
//       </div>
//     </>
//   );
// }
