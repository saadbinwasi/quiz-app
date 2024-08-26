import React, { useState } from 'react'
import Answers from './Answers'
import QuestionTimer from './QuestionTimer'
import Questions from '../questions'



function QuestionComp({
    QuestionIndex,
    onSelectAnswer,
    onSkipAnswer
}) {

  const [answer,setAnswer] = useState({
    selectedAnswer: '',
    isCorrected: null
  })

  let timer = 10000;

  if(answer.selectedAnswer){
    timer=1000;
  }

  if(answer.isCorrected !== null){
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
   setAnswer({
    selectedAnswer: answer,
    isCorrected: null
   })

   setTimeout(() => {
    setAnswer({
      selectedAnswer: answer,
      isCorrected: Questions[QuestionIndex].answers[0] === answer
     })

     setTimeout(() => {
      onSelectAnswer(answer);
     },1000)
   },1000)
  }

  let answerState = '';

  if(answer.selectedAnswer && answer.isCorrected !== null){
    answerState = answer.isCorrected ? 'correct' : 'wrong';
  }else if(answer.selectedAnswer){
    answerState = 'answered'
  }

  return (
    <div id='question'>
    <QuestionTimer key={timer} mode={answerState}  timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}/>
    <h2>{Questions[QuestionIndex].text}</h2>
   
    <Answers
     answers={Questions[QuestionIndex].answers}
    selectedAnswer={answer.selectedAnswer}
    answerState={answerState}
    onSelect={handleSelectAnswer}
    
    />
    </div>
  )
}

export default QuestionComp
