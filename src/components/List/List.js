import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    height: '100%',
    overflow: 'scroll !important'
  }
});

class CheckboxList extends React.Component {
  state = {
    checked: [0],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };


  render() {
    const { classes } = this.props;

    const todoData = [];
    for(let todoTitle in this.props.todoData) {
      todoData.push(
        {
          title: todoTitle,
          data: this.props.todoData[todoTitle]
        }
      );
    }

    console.log("todoData : ", todoData);

    return (
      <div style={{maxHeight: 2000, overflow: 'auto'}}>
        <List style={{maxHeight: '100%', overflow: 'scroll'}}>
          {todoData.map(value => {
            if (value.title === 'title') {
              return (
                <ListItem
                  key={value.title}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value)}
                  className={classes.listItem}
                >
                  <Checkbox
                    checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={value.data} />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="edit">
                      <CreateIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            }
            }
          )}
        </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
