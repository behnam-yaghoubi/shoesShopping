import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FaqIcon from '@material-ui/icons/NotListedLocation';
import BlogIcon from '@material-ui/icons/Language';
import AboutUsIcon from '@material-ui/icons/Info';
import ContactIcon from '@material-ui/icons/PermContactCalendar';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import useStyles from './menuItems.styles';
import drawerLogo from '../../../assets/images/brandLogo.png';

export default function MenuItems() {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={classes.root}>
      <div className={classes.topDrawer}>
        <img src={drawerLogo} alt="" className={classes.drawerLogo} />
      </div>
      <div>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/' ? 'primary' : 'initial'}
              >
                صفحه اصلی
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/faq">
            <ListItemIcon>
              <FaqIcon className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/faq' ? 'primary' : 'initial'}
              >
                سوالات پرتکرار
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/blog">
            <ListItemIcon>
              <BlogIcon className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/blog' ? 'primary' : 'initial'}
              >
                وبلاگ
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/about-us">
            <ListItemIcon>
              <AboutUsIcon className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/about-us' ? 'primary' : 'initial'}
              >
                درباره ما
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon>
              <ContactIcon className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/contact' ? 'primary' : 'initial'}
              >
                تماس با ما
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ProfileIcon className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" color="textSecondary">
                ورود / ثبت نام
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
