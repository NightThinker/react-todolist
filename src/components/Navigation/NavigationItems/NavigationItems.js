import React from 'react';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

import NavigationItem from './navigationItem/navigationItem';


export const navigationItems  = (
  <div>
    {/* <p>test</p> */}
    <NavigationItem link="/" exact nameItem="All"><InboxIcon /></NavigationItem>
    <NavigationItem link="/completed" nameItem="Completed"><InboxIcon /></NavigationItem>
    <NavigationItem link="/incompleted" nameItem="InCompleted"><InboxIcon /></NavigationItem>
  </div>
)

export default navigationItems;