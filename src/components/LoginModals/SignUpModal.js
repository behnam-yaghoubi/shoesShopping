/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button,
  Grid
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

export default function SignUpModal() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const underlineStyles = makeTextFieldStyles();
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className={classes.rootSignUp}>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography variant="body2">نام و نام خانوادگی :</Typography>
          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            // label="تلفن همراه"
            fullWidth
            size="medium"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underlineStyles }}
            placeholder="بهنام یعقوبی"
          />
        </Grid>

        <Grid className={classes.formGrid} item lg={6} xs={12}>
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
        </Grid>

        <Grid className={classes.formGrid} item lg={6} xs={12}>
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
        </Grid>

        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography variant="body2">تکرار رمزعبور :</Typography>
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
        </Grid>

        <Grid className={classes.formGrid} item lg={12} xs={12}>
          <Button
            fullWidth
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            ثبت نام
          </Button>
        </Grid>

        <Grid className={classes.formGrid} item sm={4} xs={12}>
          <Button
            fullWidth
            className={classes.buttonTwo}
            variant="text"
            color="primary"
            classes={{ label: classes.buttonLabel }}
          >
            قبلا ثبت نام کرده اید؟
          </Button>
        </Grid>
      </div>
    </Modal>
  );
}
