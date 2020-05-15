import React from 'react';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './cartitem.styles';
import shoesImg from '../../../assets/images/shoes.png';

export default function CartItem() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rightContent}>
        <img src={shoesImg} alt="shoes" className={classes.shoesImg} />
        <div className={classes.descDiv}>
          <Typography variant="h6" color="textPrimary">
            کفش آدیداس
          </Typography>
          <div className={classes.DeleteDiv}>
            <Typography variant="subtitle2" color="textPrimary">
              30,000
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <DeleteIcon />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
