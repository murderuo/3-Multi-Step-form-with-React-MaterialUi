// import AppBar from '@mui/material/AppBar';
import {
  Toolbar,
  IconButton,
  AppBar,
  TextField,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

function FormUserDetails({ nextStep, formValues, handleChange }) {
  const continueHandler = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <AppBar position="static">
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
          {/* <h1>test</h1> */}{' '}
          <Toolbar variant="dense">Enter User Details</Toolbar>
        </IconButton>
      </AppBar>
      <Toolbar />
      <TextField
        name="firstName"
        variant="standard"
        label="Enter First Name"
        defaultValue={formValues.firstName}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="lastName"
        variant="standard"
        label="Enter Last Name"
        defaultValue={formValues.lastName}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="email"
        variant="standard"
        label="Enter E-Mail"
        defaultValue={formValues.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <Button variant="contained" onClick={continueHandler}>CONTINUE</Button>


      <br />
      <br />
      <br />
      {/* {JSON.stringify(formValues)} */}
    </div>
  );
}

export default FormUserDetails;
