import React, { useState, useEffect } from 'react'

function QuestionTimer({ timeout, onTimeout,mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout)


    useEffect(() => {
        console.log('SETTING TIMEOUT')
       const timer = setTimeout( onTimeout, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [timeout,onTimeout])

    useEffect(() => {
        console.log('SETTING INTERVAL')
      const interval =  setInterval(() => {
        setRemainingTime(prev => prev - 100)
        }, 100)

        return () => {
            clearInterval(interval)
        }

    }, [])



    return (
        <div>
            <progress className={mode} max={timeout} value={remainingTime} id="question" />
        </div>
    )
}

export default QuestionTimer
