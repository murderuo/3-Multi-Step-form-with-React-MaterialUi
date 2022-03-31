import {
  Toolbar,
  IconButton,
  AppBar,Typography
  
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

function FormSuccess({ nextStep, formValues, handleChange }) {
  return (
    <div>
      <AppBar position="static">
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
     <Toolbar variant="dense">Form Confirm</Toolbar>
        </IconButton>
      </AppBar>
      <Typography variant="h3" color="initial" sx={{mt:9}}>Thank you for your submission.</Typography>
      <Typography variant="h5" color="initial" sx={{mt:9}}>You will get an e-mail for us...</Typography>
      <br />
      {/* {JSON.stringify(formValues)} */}
    </div>
  );
}

export default FormSuccess;
