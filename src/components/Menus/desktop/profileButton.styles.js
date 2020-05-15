import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    width: 80,
    height: '100%',
    cursor: 'pointer'
  },
  topDiv: {
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
  profileImg: {
    width: 35,
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 40,
    transition: '.5s'
  },
  BottomIcon: {
    fontSize: 27,
    color: theme.palette.icon.shoppIcon
  },
  menuContent: {
    width: 200,
    position: 'absolute',
    backgroundColor: '#fff',
    top: 64,
    borderRadius: 15,
    padding: 15,
    boxShadow: '1px 1px 4px 0px #57b0d5'
  }
}));
