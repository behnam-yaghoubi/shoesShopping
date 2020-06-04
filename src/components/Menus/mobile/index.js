import React, { useState } from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import useStyles from './index.styles';
import menuIcon from '../../../assets/images/bars.svg';
import textLogo from '../../../assets/images/brandLogo.png';
import CartButton from '../desktop/CartButton';
import MenuItems from './MenuItems';

export default function Mobile() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const toggleOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <div
        className={classes.rightMenu}
        onClick={toggleOpenMenu}
        role="presentation"
      >
        <img src={menuIcon} alt="shoesMenuIcom" className={classes.menuIcon} />
      </div>
      <div className={classes.centerMenu}>
        <img src={textLogo} alt="shoesTextLogo" className={classes.textLogo} />
      </div>
      <div className={classes.leftMenu}>
        <CartButton />
      </div>
      <SwipeableDrawer
        onOpen={toggleOpenMenu}
        onClose={toggleOpenMenu}
        open={open}
      >
        <MenuItems />
      </SwipeableDrawer>
    </div>
  );
}
