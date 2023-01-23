import { useState, useEffect } from 'react'
import './App.css'
import Trivia from './Trivia'
import { nanoid } from 'nanoid'

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState([])
  const [startQuiz, setStartQuiz] = useState(false)
  const [triviaJSX, setTriviaJSX] = useState([])

  useEffect(() => {
    async function getTrivia() {
      const res = await fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple")
      const data = await res.json()
     
      setTriviaQuestions(data.results)

    } 
    getTrivia() 
  }, [])

  useEffect(() => {
    if(triviaQuestions.length > 0){
      const triviaJSX = triviaQuestions.map( t => {
        const allAnswers = [...t.incorrect_answers, t.correct_answer]
        return (
          <Trivia 
            key={nanoid()} 
            question={t.question} 
            answers={allAnswers} 
          />
        )
      });
      setTriviaJSX(triviaJSX)
    }
  }, [triviaQuestions])   
  

  return (
    <div className="App">
      {startQuiz 
        ? triviaJSX
        : <>
            <div className='title-desc'>
              <h1 className='title'>Quizzical</h1>
              <p className='desc'>Your favorite trivia game</p>
            </div>
            <button className='start-btn' onClick={() => setStartQuiz(!startQuiz)}>Start quiz</button>        
          </>
      }
    </div>
  )
}

export default App