// import AppBar from '@mui/material/AppBar';
import {
  Toolbar,
  IconButton,
  AppBar,
  Button,
  ListItemText,
} from '@mui/material';
import { List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

function FormConfirm({ nextStep, prevStep, formValues, handleChange }) {
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
          {/* <h1>test</h1> */} <Toolbar variant="dense">Form Confirm</Toolbar>
        </IconButton>
      </AppBar>
      <List
        dense={false}
        variant="middle"
        sx={{
          width: '100%',
          maxWidth: 360,

          mx: 'auto',
        }}
      >
        {Object.keys(formValues).map(key => {
          return (
            key==='step' ? null :<ListItem key={key} dence={'true'} sx={{ mx: 'auto' }}>
              <ListItemText
                primary={formValues[key]}
                secondary={key}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>

      <br />
      <br />
      <Button variant="outlined" onClick={prevHandler}>
        BACK
      </Button>

      <Button variant="contained" onClick={continueHandler}>
        CONFIRM && CONTINUE
      </Button>

      <br />
      <br />
      <br />
      {/* {JSON.stringify(formValues)} */}
    </div>
  );
}

export default FormConfirm;
