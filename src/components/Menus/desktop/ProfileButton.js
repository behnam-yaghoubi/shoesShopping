import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Typography, Fade } from '@material-ui/core';
import Avatar from '../../../assets/images/avatar.png';
import useStyles from './profileButton.styles';

export default function ProfileButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div
        className={classes.topDiv}
        onClick={() => setOpen(!open)}
        role="presentation"
      >
        <ExpandMoreIcon className={classes.BottomIcon} />
        <img src={Avatar} alt="avatar" className={classes.profileImg} />
      </div>
      {open ? (
        <Fade in={open}>
          <div className={classes.menuContent}>
            {localStorage.token ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  <Typography variant="subtitle2">پروفایل</Typography>
                </Button>
                <Button variant="text" color="primary" size="small" fullWidth>
                  خروج
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  fullWidth
                >
                  ورود
                </Button>
                <Button variant="text" color="primary" size="small" fullWidth>
                  ثبت نام
                </Button>
              </>
            )}
          </div>
        </Fade>
      ) : null}
    </div>
  );
}
