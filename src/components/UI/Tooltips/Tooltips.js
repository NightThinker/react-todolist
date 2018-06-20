import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const tooltip = (props) => (
  <div>
    <Tooltip title="Add">
      <IconButton aria-label="Delete" color="inherit" onClick={props.showDialog}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  </div>
)

export default withStyles(styles)(tooltip);
