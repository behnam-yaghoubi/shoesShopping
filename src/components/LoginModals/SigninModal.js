/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';
import useStyles from './index.styles';

const makeTextFieldStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none'
    },
    '&&:after': {
      borderBottom: 'none'
    }
  }
});

export default function SignInModal() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const underlineStyles = makeTextFieldStyles();
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className={classes.root}>
        <Typography variant="body2">تلفن همراه :</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          // label="تلفن همراه"
          fullWidth
          size="medium"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underlineStyles }}
          placeholder="*********09"
        />
        <Typography variant="body2">رمزعبور :</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          // label="تلفن همراه"
          fullWidth
          size="medium"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underlineStyles }}
          placeholder="***********"
          type="password"
        />
        <Button
          fullWidth
          className={classes.button}
          variant="outlined"
          color="primary"
        >
          ورود
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
        >
          ثبت نام نکرده اید؟
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
        >
          رمز عبور خود را فراموش کرده اید؟
        </Button>
      </div>
    </Modal>
  );
}
