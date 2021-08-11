import React, { useState, useEffect, useRef } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { SaveRecord, GetRecords } from "../hooks/TimeRecord";

const useStyles = makeStyles({
  center: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
    display: 'flex'
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
  }
});

console.log(GetRecords())

const Chronometer = () => {

  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)
  const [records, setRecords] = useState([])

  const classes = useStyles();

  const handleStart = () => {
    increment.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 10)
  }

  const handlePause = () => {
    if (!isPaused) { // Pause
      clearInterval(increment.current)
      setIsPaused(true)
    } else { // Resume
      setIsPaused(false)
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
        console.log('records', records)
      }))
    })
    // Resets time
    setTime(0)
    
  }

  const formatTime = () => {
    // Calculates milliseconds, seconds and minutes
    const getMilliseconds = `0${(time % 100)}`.slice(-2)
    let seconds = Math.trunc((time / 100));
    const minutes = Math.floor(time / 6000)
    if (seconds >= 60)
      seconds = Math.abs(seconds - 60 * minutes)
    const getSeconds = `0${seconds}`.slice(-2)
    const getMinutes = `0${minutes}`.slice(-2)

    return `${getMinutes}:${getSeconds}:${getMilliseconds}`
  }
  
  return (
    <div>
      <div className={classes.content, classes.center}>
        <p className={classes.time}> {formatTime()} </p>
      </div>
      <div className={classes.center}>
        <Button variant="contained" color="primary" onClick={handleStart}> Start </Button>
        <Button variant="contained" color="primary" onClick={handlePause}> {isPaused ? 'Resume' : 'Pause'} </Button>
        <Button variant="contained" color="secondary" onClick={handleFinish}> Finish </Button>
      </div>
      <table className={classes.list}>
        <thead><tr><th>Records</th></tr></thead>
         <tbody> 
          { records.map((record, index) => 
          <tr><td key={index} className={classes.td}> {record.time} </td></tr> 
          )}
         </tbody>
      </table>
    </div>
    
  )
}

export default Chronometer