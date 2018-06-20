import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';

import Aux from './Aux';

import { withStyles } from '@material-ui/core/styles';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';

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
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Layout extends Component {
  state = {
    mobileOpen: false,
    openDialog: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleClickOpen = () => {
    this.setState({ openDialog: true });
  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <Aux>
        <div className={classes.root}>
          <Toolbar 
            drawerToggleClicked={this.handleDrawerToggle} 
            mobileOpen={this.state.mobileOpen} 
            onClose={this.handleDrawerToggle}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography noWrap>{this.props.children}</Typography>
          </main>
        </div>
      </Aux>
    )
  }
}

export default withStyles(styles)(Layout);
