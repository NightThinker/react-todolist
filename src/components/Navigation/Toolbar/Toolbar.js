import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '../AppBar/AppBar';
import SideDrawer from '../SideDrawer/SideDrawer';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


const toolbar = (props) => {
  console.log('props: ', props);
  return (
    <div >
      <AppBar Clicked={props.drawerToggleClicked} showDialog={props.showDialog} openDialog={props.openDialog} closeDialog={props.closeDialog}/>
      <SideDrawer mobileOpen={props.mobileOpen} onClose={props.onClose}/>
    </div>
  )
}

export default withStyles(styles)(toolbar);