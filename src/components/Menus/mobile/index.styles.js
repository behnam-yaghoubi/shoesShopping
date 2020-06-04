import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    width: '100%',
    height: 70,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#131a21',
    boxShadow: '1px 0px 3px 0px #3b3939'
  },
  rightMenu: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftMenu: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    width: 45,
    height: 45
  },
  textLogo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
