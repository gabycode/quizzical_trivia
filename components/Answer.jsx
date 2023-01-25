import "../src/Trivia.css";

const Answer = ({ answer, setSelectedAnswer, selectedAnswer }) => {
  return (
    <div
      className={`trivia-answers ${
        answer === selectedAnswer ? "selected" : ""
      }`}
      onClick={() => {
        setSelectedAnswer(answer);
      }}
    >
      {answer}
    </div>
  );
};

export default Answer;
