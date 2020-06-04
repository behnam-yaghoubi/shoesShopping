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

export default function ForgetPasswordModal() {
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
        <Button
          fullWidth
          className={classes.button}
          variant="outlined"
          color="primary"
        >
          تایید شماره همراه
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
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
          ثبت نام
        </Button>
      </div>
    </Modal>
  );
}
