import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form({ setSomeState, someState }) {
  const classes = useStyles();

  const [text, setText] = useState(someState);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="text"
            label="State Text"
            name="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{setSomeState(text)}}
          >
            Set State
          </Button>
        </form>
      </div>
    </Container>
  );
}
