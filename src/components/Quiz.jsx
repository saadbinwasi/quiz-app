import React, { useCallback, useState } from 'react'
import Questions from '../questions'
import QuestionComp from './QuestionComp';
import Summary from './Summary';

function Quiz() {
   
    const [userAnswer,setUserAnswer] = useState([])

    const activeQuestionIndex =  userAnswer.length ;

    const QuizisComplete = activeQuestionIndex === Questions.length;
    

    const handleSelectAnswer = useCallback((selectedAnswer) => {
     
        setUserAnswer((prevState) => [...prevState, selectedAnswer]);
    
    }, []);
    

    const handleAnswerSkip = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer])

if (QuizisComplete) {
    return (
       <Summary userAnswer={userAnswer}/>
    )
}



  return (
    <div id='quiz'>
   <QuestionComp
   key={activeQuestionIndex}
   QuestionIndex={activeQuestionIndex}
   onSelectAnswer = {handleSelectAnswer}
   onSkipAnswer = {handleAnswerSkip}
   />
    </div>
    
  )
}

export default Quiz
