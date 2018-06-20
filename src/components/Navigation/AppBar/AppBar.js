import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import Tooltips from '../../UI/Tooltips/Tooltips';
import Dialog from '../../UI/Dialog/Dialog';
import TodoData from '../../../containers/TodoData';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const appBar = (props) => {
  console.log('props: ', props);
  
  const { classes, theme } = props;

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.Clicked}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap>
          Responsive drawer
        </Typography>
        <TodoData/>
        {/* <Tooltips showDialog={props.showDialog}/>
        <Dialog openDialog={props.openDialog} closeDialog={props.closeDialog}/> */}

      </Toolbar>
    </AppBar>
  )
}


export default withStyles(styles)(appBar);