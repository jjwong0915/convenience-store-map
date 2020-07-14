import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';

function StoreFilter(props) {
  const handleChange = (event) => {
    props.updateFilter(event.target.name, event.target.checked);
  };
  const { toilet, atm, wifi, coffee, icecream } = props.filter;
  //
  return (
    <List dense subheader={
      <ListSubheader>篩選條件</ListSubheader>
    }>
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={toilet} onChange={handleChange} name="toilet" />
        </ListItemIcon>
        <ListItemText primary="洗手間" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={atm} onChange={handleChange} name="atm" />
        </ListItemIcon>
        <ListItemText primary="提款機" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={wifi} onChange={handleChange} name="wifi" />
        </ListItemIcon>
        <ListItemText primary="WiFi" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={coffee} onChange={handleChange} name="coffee" />
        </ListItemIcon>
        <ListItemText primary="咖啡機" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={icecream} onChange={handleChange} name="icecream" />
        </ListItemIcon>
        <ListItemText primary="冰淇淋" />
      </ListItem>
    </List>
  );
}

export default StoreFilter;
