import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    backgroundColor: "#343A40",
    color: 'white',
    height: 100,
    margin: '0',
    padding: '0 30px',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
    display: 'flex'
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <h1>Chronometer</h1>
    </div>
  )
}

export default Header