import React from 'react'
import endquizimg from '/Users/saadbinwasi/Desktop/final practice react for job/quiz app/src/assets/quiz-complete.png'
import Questions from '../questions'

function Summary({userAnswer}) {

    const skippedAnswer = userAnswer.filter((answer) => answer === null);
    const correctAnswer = userAnswer.filter((answer,index) => answer === Questions[index].answers[0])
    const wrongAnswer = userAnswer.filter((answer, index) => answer !== null && answer !== Questions[index].answers[0]);
    const totalAnswers = userAnswer.length;
    const skippedAnswerShare = Math.round((skippedAnswer.length/userAnswer.length) * 100);
    const wrongAnswerShare = Math.round((wrongAnswer.length / totalAnswers) * 100);
    const correctAnswerShare = Math.round((correctAnswer.length/userAnswer.length) * 100);


  return (
    <div id='summary'>
    <img src={endquizimg} alt="quiz completed"/>
    <h2>Quiz Completed!</h2>
    <div id='summary-stats'>
     
        <p>
            <span className='number'>{skippedAnswerShare}%</span>
            <span className='text'>skipped</span>
        </p>
        <p>
            <span className='number'>{correctAnswerShare}%</span>
            <span className='text'>Correct</span>
        </p>
        <p>
            <span className='number'>{wrongAnswerShare}%</span>
            <span className='text'>Incorrect</span>
        </p>
      
    </div>
    <ol>
        {userAnswer.map((answer,index) => {
            let cssClass = 'user-answer';

            if(answer === null){
                cssClass += ' skipped'
            }else if(answer === Questions[index].answers[0]) {
                cssClass += ' correct'
            }else{
                cssClass += ' wrong'
            }
        return (
            <li key={index}>
            <h3>{index}</h3>
            <p className='question'>{Questions[index].text}</p>
            <p className={cssClass}>{answer ?? 'Skipped'}</p>
           </li>
        );
})}
       
    </ol>
</div>
  )
}

export default Summary
