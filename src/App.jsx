import { useState, useEffect } from "react";
import "./App.css";
import Trivia from "./Trivia";
import CheckAnswersBtn from "../components/Button";
import { nanoid } from "nanoid";

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [triviaQuestions, setTriviaQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    async function getTrivia() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
      );
      const data = await res.json();

      setTriviaData(data.results);
      setTriviaQuestions(data.results.map((question) => question.question));
      setAnswers(
        data.results.map((answer) => [
          ...answer.incorrect_answers,
          answer.correct_answer,
        ])
      );
      // console.log(triviaData);
      console.log(triviaQuestions);
      console.log(answers);
    }
    getTrivia();
  }, []);

  // const answers = triviaData.map((t) => {
  //   const allAnswers = [...t.incorrect_answers, t.correct_answer];
  // });

  // const triviaJSX = triviaQuestions.map((t) => {
  //   const allAnswers = [...t.incorrect_answers, t.correct_answer];
  //   return (
  //     <Trivia
  //       key={nanoid()}
  //       question={t.question}
  //       answers={allAnswers}
  //       correctAnswer={t.correct_answer}
  //       incorrectAnswers={t.incorrect_answers}
  //     />
  //   );
  // });

  // console.log(triviaJSX);

  return (
    <div className="App">
      {/* {startQuiz ? (
        <>
          {triviaJSX}
          <CheckAnswersBtn triviaJSX={triviaJSX} />
        </>
      ) : ( */}
      <>
        <div className="title-desc">
          <h1 className="title">Quizzical</h1>
          <p className="desc">Your favorite trivia game</p>
          <button
            className="start-btn"
            // onClick={() => setStartQuiz(!startQuiz)}
          >
            Start quiz
          </button>
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(
//       "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestions(data.results.map((question) => question.question));
//         setAnswers(data.results.map((question) => question.correct_answer));
//         setIsLoading(false);
//       });
//   }, []);

//   const handleCheckAnswers = () => {
//     const userAnswers = answers.map((answer) => {
//       const input = document.querySelector(`input[name='${answer}']:checked`);
//       return input.value;
//     });

//     const isCorrect = JSON.stringify(userAnswers) === JSON.stringify(answers);
//     setResult(isCorrect ? "Correct" : "Incorrect");
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           {questions.map((question, index) => (
//             <div key={question}>
//               <div>{question}</div>
//               <input
//                 type="radio"
//                 id={`answer-${index}-1`}
//                 name={answers[index]}
//                 value="Answer 1"
//               />
//               <label htmlFor={`answer-${index}-1`}>Answer 1</label>
//               <input
//                 type="radio"
//                 id={`answer-${index}-2`}
//                 name={answers[index]}
//                 value="Answer 2"
//               />
//               <label htmlFor={`answer-${index}-2`}>Answer 2</label>
//               <input
//                 type="radio"
//                 id={`answer-${index}-3`}
//                 name={answers[index]}
//                 value="Answer 3"
//               />
//               <label htmlFor={`answer-${index}-3`}>Answer 3</label>
//               <input
//                 type="radio"
//                 id={`answer-${index}-4`}
//                 name={answers[index]}
//                 value="Answer 4"
//               />
//               <label htmlFor={`answer-${index}-4`}>Answer 4</label>
//             </div>
//           ))}
//           <button onClick={handleCheckAnswers}>Check Answers</button>
//           {result && <div>{result}</div>}
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
