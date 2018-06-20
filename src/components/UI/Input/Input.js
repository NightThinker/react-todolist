import React from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const input = (props) => {
  const { classes } = props;
  let inputElement = null;



  switch (props.elementType) {
    case ('input'):
      inputElement = <TextField
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}/>;
      break;
    case ('date'):
      inputElement = <TextField 
        {...props.elementConfig}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ('time'):
      inputElement = <TextField 
        {...props.elementConfig}
        defaultValue={props.defaultValue}
        value={props.value}
        className={classes.textField}
        onChange={props.changed} />;
      break;
  
    default:
      inputElement = <TextField
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}/>;
      break;
  }
  return (
    <div>
      {inputElement}
    </div>
  );
};

export default withStyles(styles)(input);