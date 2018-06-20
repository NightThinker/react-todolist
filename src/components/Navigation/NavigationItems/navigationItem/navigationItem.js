import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const navigationItem = (props) => (
  <NavLink 
      to={props.link}
      exact={props.exact}
    >
    <ListItem button>
      <ListItemIcon>
        {props.children}
      </ListItemIcon>
      <ListItemText primary={props.nameItem} />
    </ListItem>
  </NavLink>
)

export default navigationItem;