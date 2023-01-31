import "../src/Trivia.css";

export default function CheckAnswersBtn({ triviaJSX }) {
  // console.log(triviaJSX);

  function handleClick() {
    console.log("checking answers");
  }

  return (
    <div className="btn-container">
      <button className="check-answers-btn" onClick={handleClick}>
        Check answers
      </button>
    </div>
  );
}
