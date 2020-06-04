import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: 300,
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 80,
    padding: 25,
    '&:focus': {
      outline: 'none'
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  rootSignUp: {
    width: 600,
    height: 'auto',
    backgroundColor: '#1a222a',
    margin: 'auto',
    marginTop: 80,
    padding: 25,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '&:focus': {
      outline: 'none'
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  inputContainer: {
    backgroundColor: '#2a3a48',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    border: '1px solid #203d75'
  },
  input: {
    padding: 10,
    textAlign: 'right'
  },
  button: {
    marginTop: 20
  },
  buttonTwo: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'left',
    '&:hover': {
      backgroundColor: '#1a222a'
    }
  },
  buttonLabel: {
    justifyContent: 'left'
    // textAlign: 'left !important'
  },
  formGrid: {
    paddingRight: 15,
    paddingLeft: 15,
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  codeDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  counterText: {
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
    fontSize: 12,
    color: '#b3aeae'
  },
  buttonText: {
    fontSize: 12
  },
  sendCodeAgainButton: {
    marginTop: 15
  }
}));
