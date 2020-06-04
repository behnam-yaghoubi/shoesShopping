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

export default function ChangePasswordModal() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const underlineStyles = makeTextFieldStyles();
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className={classes.root}>
        <Typography variant="body2">رمز عبور جدید :</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          fullWidth
          size="medium"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underlineStyles }}
          placeholder="***********"
          type="password"
        />
        <Typography variant="body2">تکرار رمز عبور جدید :</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
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
          تغییر رمز عبور
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
        >
          بازگشت به فرم ورود
        </Button>
      </div>
    </Modal>
  );
}
