/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import {
  Modal,
  // TextField,
  // makeStyles,
  Typography,
  Button
} from '@material-ui/core';
import ReactCodeInput from 'react-code-input';
import useStyles from './index.styles';

// const makeTextFieldStyles = makeStyles({
//   underline: {
//     '&&&:before': {
//       borderBottom: 'none'
//     },
//     '&&:after': {
//       borderBottom: 'none'
//     }
//   }
// });

export default function CodeModal() {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    setInterval(() => {
      setCounter((oldcounter) => (oldcounter === 0 ? 0 : oldcounter - 1));
    }, 1000);
  }, []);
  // const underlineStyles = makeTextFieldStyles();
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className={classes.root}>
        <Typography variant="body2">کد ارسالی: </Typography>
        <div className={classes.codeDiv} dir="ltr">
          <ReactCodeInput
            inputStyle={{
              backgroundColor: '#2a3a48',
              width: 35,
              margin: 5,
              height: 35,
              border: 'none',
              textAlign: 'center',
              color: '#fff',
              fontSize: 20
            }}
            fields={5}
          />
        </div>
        {counter !== 0 ? (
          <Typography variant="body2" className={classes.counterText}>
            {counter} ثانیه تا پایان اعتبار کد
          </Typography>
        ) : (
          <Button
            fullWidth
            variant="text"
            color="primary"
            className={classes.sendCodeAgainButton}
          >
            <Typography variant="body2" className={classes.buttonText}>
              دررخواست مجدد کد
            </Typography>
          </Button>
        )}
        <Button
          fullWidth
          className={classes.button}
          variant="outlined"
          color="primary"
        >
          تایید کد
        </Button>
        <Button
          fullWidth
          className={classes.buttonTwo}
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
        >
          ویرایش شماره همراه
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
      </div>
    </Modal>
  );
}
