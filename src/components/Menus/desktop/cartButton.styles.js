import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    width: 80,
    // boxShadow: '1px 1px 6px 1px #272b2b',
    height: '100%'
    // border: '1px #202d2a solid',
    // position: 'relative'
  },
  topDiv: {
    cursor: 'pointer',
    position: 'relative',
    transition: '.5s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      opacity: 0.5,
      transition: '.5s'
    }
  },
  shoppIcon: {
    fontSize: 35,
    color: theme.palette.icon.shoppIcon
  },
  badge: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: -6,
    left: -1
  },
  cartContent: {
    width: 300,
    position: 'absolute',
    backgroundColor: '#2a455f',
    top: 72,
    right: 5,
    borderRadius: 5,
    padding: 15,
    boxShadow: '1px 1px 4px 0px #57b0d5'
  },
  priceDive: {
    padding: 10,
    borderBottomColor: theme.palette.border.cartItemBorder,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    marginTop: 10
  }
}));
