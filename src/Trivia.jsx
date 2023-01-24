import { useState } from 'react'
import './Trivia.css'

export default function Trivia({question, answers}) {
  const [selectedAnswer, setSelectedAnswer] = useState([])  
    
  const answersJSX = answers.map((answer, index) => (
    <div key={index} className="trivia-answers">
      {answer}
    </div>
  ))
    return(
        <div className='trivia'>
            <h1 className="trivia-question">{question}</h1>
            <div className="answers">
                {answersJSX}
            </div>
        </div>
    )
}