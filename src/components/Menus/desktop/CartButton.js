import React, { useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCart';
import { Typography, Button, Fade } from '@material-ui/core';
import useStyles from './cartButton.styles';
import CartItem from './CartItem';

export default function CartButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <div
        role="presentation"
        className={classes.topDiv}
        onClick={() => setOpen(!open)}
      >
        <ShoppingBasketIcon className={classes.shoppIcon} />
        <div className={classes.badge}>
          <Typography variant="subtitle2" color="textPrimary">
            2
          </Typography>
        </div>
      </div>
      <Fade in={open}>
        <div className={classes.cartContent}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div className={classes.priceDive}>
            <Typography variant="body2" color="textPrimary">
              قیمت کل:
            </Typography>
            <Typography variant="h6" color="textPrimary">
              50,200
            </Typography>
          </div>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size="medium"
            className={classes.button}
          >
            نمایش سبد خرید
          </Button>
        </div>
      </Fade>
    </div>
  );
}
