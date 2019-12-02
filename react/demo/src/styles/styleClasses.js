/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/

import * as Colors from '@pxblue/colors';

const styles = theme => ({
  '@keyframes slideIn': {
    '0%': {
      transform: 'translate(-100%, -50%)'
    },
    '70%': {
      transform: 'translate(10%, -50%)'
    },
    '100%': {
      transform: 'translate(0%, -50%)'
    }
  },
  fab: {
    bottom: 60,
    right: 20,
    width: '190px',
    position: 'fixed',
    height: '50px',
    borderRadius: 2,
    zIndex: 2000,

  },
  themeChip: {
    bottom: 24,
    right: 20,
    position: 'fixed',
    width: '190px',
    zIndex: 2000,
    borderRadius: 2
  },
  flush: {
    paddingLeft: theme.spacing(.5)
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0
    },
    paddingLeft: theme.spacing(2)
  },
  noPadding: {
    padding: 0
  },
  drawerMargin: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
    marginLeft: theme.spacing(7),
    transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawerMarginFull: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
    marginLeft: theme.spacing(45),
    transition: 'margin 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawerWidthFull: {
    width: theme.spacing(45),
    transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawerWidthCollapsed: {
    width: theme.spacing(7),
    transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)'
  },
  drawer: {
    maxWidth: '85%',
    width: theme.spacing(45)
  },
  header: {
    height: '180px',
    color: 'white',
    background: Colors.blue['500'],
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  notice:{
    padding: '75px 25px', 
    color: Colors.white['500'], 
    backgroundColor: Colors.blue['500'] + 'F5', 
    textAlign: 'center', 
    position: 'fixed',
    zIndex: 10000,
    left: 0,
    top: '50%',
    transform: 'translate(-100%, -50%)',
    width: '100%',
    animation: `$slideIn 1200ms ${theme.transitions.easing.easeInOut} 1000ms`,
    animationFillMode: 'forwards'
  },
  subheader: {
    paddingLeft: '15px',
    paddingRight: '15px'
  },
  listItem: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  listItemText: {
    paddingLeft: '1px'
  },
  // these must be defined, even if empty so we can reference them in other nested rules
  listIcon: {},
  open: {}
});
export default styles;
