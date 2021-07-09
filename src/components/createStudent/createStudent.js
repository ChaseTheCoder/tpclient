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

  const [student, setStudent] = useState({ //useState, React Hook, updates the data in text fields on front end
    firstName: '',
    lastName: '',
    grade: ''
  })

  const updateStudent = e => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }
  
  const createStudent = () => {
    axios.post('http://localhost:5000/students', student) //sends data from client (useState) to backend
    .then(
      window.location.reload()
    ).catch(error => {
        console.log(error)
    })
  }
  return (
    <>
      <h2>Create Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="outlined-basic" 
          name="firstName"
          label="First Name" 
          variant="outlined" 
          value={student.firstName} onChange={updateStudent}
        />
        <TextField 
          id="outlined-basic" 
          name="lastName"
          label="Last Name" 
          variant="outlined" 
          value={student.lastName} 
          onChange={updateStudent}
        />
        <TextField 
          id="outlined-basic" 
          name="grade"
          label="Grade" 
          variant="outlined" 
          value={student.grade} 
          onChange={updateStudent}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
        Create
        </Button>
      </form>
    </ >
  );
}
