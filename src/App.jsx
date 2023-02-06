import { useState, useEffect } from "react";
import "./App.css";
import "./Trivia.css";
import Trivia from "./Trivia";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [score, setScore] = useState("");
  const [playAgain, setPlayAgain] = useState(false);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple"
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
    const incorrectAnswers = selectedAnswers.filter(
      (answer, index) => answer !== correctAnswers[index]
    );
    setIncorrectAnswers(incorrectAnswers);
    setShowAnswers(true);

    const correctCount = correctAnswers.filter(
      (answer, index) => answer === selectedAnswers[index]
    ).length;

    setScore(
      `You scored ${correctCount}/${correctAnswers.length} correct answers`
    );

    setPlayAgain(true);
  };

  const restartTrivia = () => {
    setSelectedAnswers([]);
    setCorrectAnswers([]);
    setIncorrectAnswers([]);
    setPlayAgain(false);
  };

  return (
    <div className="App">
      {startQuiz ? (
        <>
          <Trivia
            questions={questions}
            selectedAnswers={selectedAnswers}
            correctAnswers={correctAnswers}
            incorrectAnswers={incorrectAnswers}
            showAnswers={showAnswers}
            handleAnswerClick={handleAnswerClick}
            score={score}
          />
          <div className="btn-container">
            <div className="score">{score}</div>
            {playAgain ? (
              <button className="play-again-btn" onClick={restartTrivia}>
                Play Again
              </button>
            ) : (
              <button
                className="check-answers-btn"
                onClick={handleCheckAnswersClick}>
                Check Answers
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="title-desc">
            <h1 className="title">Quizzical</h1>
            <p className="desc">Your favorite trivia game</p>
            <button
              className="start-btn"
              onClick={() => setStartQuiz(!startQuiz)}>
              Start quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
