import { useState } from 'react'
import './App.css'
import Trivia from './Trivia'
import { nanoid } from 'nanoid'

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState([])
  const [startQuiz, setStartQuiz] = useState(false)


  async function getTrivia() {
    const res = await fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple")
    const data = await res.json()

    setTriviaQuestions(data.results)
    setStartQuiz(!startQuiz)  
    console.log(data.results)
  }
  
  const triviaJSX = triviaQuestions.map( t => (
    <Trivia 
      key={nanoid()}
      question={t.question}
      answers={t.incorrect_answers}
    />
  ))


  return (
    <div className="App">
      {startQuiz 
        ? triviaJSX
        : <>
            <div className='title-desc'>
              <h1 className='title'>Quizzical</h1>
              <p className='desc'>Your favorite trivia game</p>
            </div>
            <button className='start-btn' onClick={getTrivia}>Start quiz</button>        
          </>
      }
    </div>
  )
}

export default App
