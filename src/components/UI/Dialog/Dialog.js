import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const formDialog = (props) => {
  const { classes } = props;
  return (
  
  <div>
  <Dialog
    open={props.openDialog}
    onClose={props.closeDialog}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">ToDoList</DialogTitle>
    <DialogContent>
      {/* <TextField
      autoFocus
        id="name"
        label="Title"
        margin="normal"
        fullWidth
      />
      <TextField
        id="name"
        label="Description"
        margin="normal"
        fullWidth
      />
      <TextField
        id="date"
        label="Due Date"
        type="date"
        defaultValue="2017-05-24"
      />

      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
      /> */}
      {props.children}
    </DialogContent>
    <DialogActions>
      <Button onClick={props.closeDialog} color="primary">
        Add
      </Button>
      <Button onClick={props.closeDialog} color="primary">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
  </div>
)
}

export default withStyles(styles)(formDialog);
