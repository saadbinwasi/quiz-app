import React, { useEffect, useRef, useState } from 'react'

function Answers({answers,selectedAnswer,answerState,onSelect,}) {

    const shuffledAnswersRef = useRef(null);


    if (!shuffledAnswersRef.current) {
        shuffledAnswersRef.current = [...answers];
        shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
      
    }

  return (
    <ul id='answers'>
    {shuffledAnswersRef.current.map((answer) => {
       const isSelected = selectedAnswer === answer;
       let cssClasses = ''
 

       if (answerState === 'answerd' && isSelected){
           cssClasses = 'selected'
       }

       if((answerState === 'correct' || answerState === 'wrong') && isSelected){
           cssClasses = answerState;
       }

       return  <li key={answer} className='answer'>
           <button disabled={answerState !== ''} className={cssClasses} onClick={() => onSelect(answer)}>{answer}</button>
        </li>
       
       
    
    }
   
    )}
   </ul>
  )
}

export default Answers
