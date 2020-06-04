import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: 260,
    height: '100%',
    backgroundColor: '#131a21',
    padding: 5
  },
  topDrawer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: theme.palette.border.drawerItemBorder,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid'
  },
  menuIcon: {
    width: 25,
    height: 25,
    color: '#3384ab'
  }
}));
