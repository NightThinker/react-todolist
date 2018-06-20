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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
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
  {/* <Button onClick={this.handleClickOpen}>Open form dialog</Button> */}
  <Dialog
    open={props.openDialog}
    onClose={props.closeDialog}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">ToDoList</DialogTitle>
    <DialogContent>
      <TextField
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
        id="datetime-local"
        label="Due Date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
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
