import React, { useState, useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { SaveRecord, GetRecords } from "../hooks/TimeRecord";

const useStyles = makeStyles({
  center: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 500,
    margin: '0',
    padding: '0 30px',
  },
  time: {
    fontSize: '10vh'
  },
  list: {
    margin: 'auto',
    padding: '100px',
    fontSize: '3vh',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  td: {
    padding: '15px'
  },
  button: {
    margin: '10px'
  }
});

const Chronometer = () => {

  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const increment = useRef(null)
  const [records, setRecords] = useState([])

  const classes = useStyles();

  // GetRecords().then((results => {
  //   setRecords(results)
  // }))

  const handleStart = () => {
    setIsRunning(true)
    increment.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 10)
  }

  const handlePause = () => {
    if (!isPaused) { // Pause
      clearInterval(increment.current)
      setIsPaused(true)
      setIsRunning(false)
    } else { // Resume
      setIsPaused(false)
      setIsRunning(true)
      increment.current = setInterval(() => {
        setTime((time) => time + 1)
      }, 10)
    }
  }

  const handleFinish = () => {
    // Finish the timer interval
    clearInterval(increment.current)
    setIsPaused(false)
    // Save the time in db
    SaveRecord(formatTime()).then(() => {
      // Updates the record list
      GetRecords().then((results => {
        setRecords(results)
      }))
    })
    // Resets time
    setTime(0)
    clearInterval(increment.current)
    setIsRunning(false)
  }

  const formatTime = () => {
    // Calculates milliseconds, seconds and minutes
    const getMilliseconds = `0${(time % 100)}`.slice(-2)
    let seconds = Math.trunc((time / 100));
    let minutes = Math.floor(time / 6000)
    if (minutes >= 99) minutes = 99
    if (seconds >= 60)
      seconds = Math.abs(seconds - 60 * minutes)
    const getSeconds = `0${seconds}`.slice(-2)
    const getMinutes = `0${minutes}`.slice(-2)

    return `${getMinutes}:${getSeconds}:${getMilliseconds}`
  }
  
  return (
    <div>
      <div className={`${classes.content} ${classes.center}`}>
        <p className={classes.time}> {formatTime()} </p>
      </div>
      <div className={classes.center}>
        <Button variant="contained" color="primary" onClick={handleStart} className={classes.button}> Start </Button>
        <Button variant="contained" color="primary" onClick={handlePause} className={classes.button}> {isPaused ? 'Resume' : 'Pause'} </Button>
        <Button variant="contained" color="secondary" onClick={handleFinish} className={classes.button} disabled={!isRunning}> Finish </Button>
      </div>
      <table className={classes.list}>
        <thead><tr><th>{records.length > 0 ? 'Records' : ''}</th></tr></thead>
         <tbody> 
          { records.map((record, index) => 
          <tr key={index}><td className={classes.td}> {record.time} </td></tr> 
          )}
         </tbody>
      </table>
    </div>
    
  )
}

export default Chronometer