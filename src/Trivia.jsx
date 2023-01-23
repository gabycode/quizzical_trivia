import './Trivia.css'

export default function Trivia({question, answers}) {
    
    const answersJSX = answers.map((answer, index) => (
    <div key={index} className="trivia-answers">
      {answer}
    </div>
  ))
  console.log(answersJSX)
    return(
        <div>
            <h1 className="trivia-question">{question}</h1>
            <div className="answers">
                {answersJSX}
            </div>
        </div>
    )
}