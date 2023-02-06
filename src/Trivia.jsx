import { decode } from "html-entities";

const Trivia = ({
  questions,
  selectedAnswers,
  correctAnswers,
  incorrectAnswers,
  showAnswers,
  handleAnswerClick,
}) => {
  return questions.map((question, questionIndex) => {
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
              }`}>
              {decode(answer)}
            </div>
          ))}
        </div>
      </div>
    );
  });
};

export default Trivia;
