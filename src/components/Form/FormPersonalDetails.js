// import AppBar from '@mui/material/AppBar';
import { Toolbar, IconButton, AppBar, TextField, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

function FormPersonalDetails({ nextStep, prevStep, formValues, handleChange }) {
  const continueHandler = e => {
    e.preventDefault();
    nextStep();
  };
  const prevHandler = e => {
    e.preventDefault();
    prevStep();
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
        name="occupation"
        variant="standard"
        label="Enter occupation"
        defaultValue={formValues.occupation}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="city"
        variant="standard"
        label="Enter city"
        defaultValue={formValues.city}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="bio"
        variant="standard"
        label="Enter bio"
        defaultValue={formValues.bio}
        onChange={handleChange}
      />
      <br />
      <br />
      <Button variant="outlined" onClick={prevHandler}
      >
        BACK
      </Button>

      <Button variant="contained" onClick={continueHandler}>
        CONTINUE
      </Button>

      <br />
      <br />
      <br />
      {/* {JSON.stringify(formValues)} */}
    </div>
  );
}

export default FormPersonalDetails;
