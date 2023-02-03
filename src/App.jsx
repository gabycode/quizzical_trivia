// import { useState, useEffect } from "react";
// import "./App.css";
// import Trivia from "./Trivia";
// import CheckAnswersBtn from "../components/Button";
// import { nanoid } from "nanoid";

// function App() {
//   const [triviaData, setTriviaData] = useState([]);
//   const [startQuiz, setStartQuiz] = useState(false);
//   const [selectedAnswers, setSelectedAnswers] = useState({});

//   useEffect(() => {
//     async function getTrivia() {
//       try {
//         const res = await fetch(
//           "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
//         );
//         const data = await res.json();

//         setTriviaData(data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getTrivia();
//   }, []);

//   function handleCheckAnswers(checkAnswers) {
//     checkAnswers();
//   }

//   // const triviaJSX = triviaData.map((t, index) => (
//   //   <Trivia
//   //     key={index}
//   //     question={t.question}
//   //     answers={[...t.incorrect_answers, t.correct_answer]}
//   //     correctAnswer={t.correct_answer}
//   //   />
//   // ));

//   return (
//     <div className="App">
//       {startQuiz ? (
//         <>
//           {triviaData.map((t, index) => (
//             <Trivia
//               key={index}
//               question={t.question}
//               answers={[...t.incorrect_answers, t.correct_answer]}
//               correctAnswer={t.correct_answer}
//             />
//           ))}
//           {/* {triviaJSX} */}
//           <CheckAnswersBtn triviaData={triviaData} />
//         </>
//       ) : (
//         <>
//           <div className="title-desc">
//             <h1 className="title">Quizzical</h1>
//             <p className="desc">Your favorite trivia game</p>
//             <button
//               className="start-btn"
//               onClick={() => setStartQuiz(!startQuiz)}
//             >
//               Start quiz
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import "./Trivia.css";
import { decode } from "html-entities";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const shuffledQuestions = data.results.map((question) => {
          const shuffledAnswers = [
            ...question.incorrect_answers,
            question.correct_answer,
          ].sort(() => Math.random() - 0.5);
          return { ...question, shuffledAnswers };
        });
        setQuestions(shuffledQuestions);
        setCorrectAnswers(
          shuffledQuestions.map((question) => question.correct_answer)
        );
      });
  }, []);

  const handleAnswerClick = (questionIndex, answer) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleCheckAnswersClick = () => {
    setIncorrectAnswers(
      selectedAnswers.filter(
        (answer, index) => answer !== correctAnswers[index]
      )
    );
    setShowAnswers(true);
  };

  const trivia = questions.map((question, questionIndex) => {
    const shuffledAnswers = question.shuffledAnswers;

    return (
      <div className="trivia" key={questionIndex}>
        <h2 className="trivia-question">{decode(question.question)}</h2>
        <div className="answers">
          {shuffledAnswers.map((answer, answerIndex) => (
            <div
              key={answerIndex}
              onClick={() => {
                handleAnswerClick(questionIndex, answer);
              }}
              className={`trivia-answers ${
                showAnswers
                  ? incorrectAnswers.includes(answer)
                    ? "incorrect"
                    : correctAnswers[questionIndex] === answer
                    ? "correct"
                    : ""
                  : selectedAnswers[questionIndex] === answer
                  ? "selected"
                  : ""
              }`}
            >
              {decode(answer)}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      {startQuiz ? (
        <>
          {trivia}
          <div className="btn-container">
            <button
              className="check-answers-btn"
              onClick={handleCheckAnswersClick}
            >
              Check Answers
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="title-desc">
            <h1 className="title">Quizzical</h1>
            <p className="desc">Your favorite trivia game</p>
            <button
              className="start-btn"
              onClick={() => setStartQuiz(!startQuiz)}
            >
              Start quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
