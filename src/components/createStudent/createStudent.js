import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'; //Axios is designed to handle http requests and responses. It's used more often than Fetch because it has a larger set of features and it supports older browsers.

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  const [student, setStudent] = useState({

    firstName: '',
    lastName: '',
    grade: ''
  })
  
  const createStudent = () => {
    axios.post('http://localhost:5000/students', student) //sends data from client to backend
  }
  return (
    <>
      <h2>Create Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="First Name" variant="outlined" value={student.firstName} onChange={(event) => {
          setStudent({ ...student, firstName: event.target.value })
        }}/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" value={student.lastName} onChange={(event) => {
          setStudent({ ...student, lastName: event.target.value })
        }}/>
        <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
          setStudent({ ...student, grade: event.target.value })
        }}/>

        <Button variant="contained" color="primary" onClick={createStudent}>
        Create
        </Button>
      </form>
    </ >
  );
}
