import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PlaceIcon from '@material-ui/icons/Place';

export default function StoreList(props) {
  const [state, setState] = props.store;

  return (
    <List
      dense
      style={{ maxHeight: '100%', overflow: 'auto' }}
      subheader={
        <ListSubheader>篩選結果（按照距離排列）</ListSubheader>
      }
    >
      {
        state.storeList.map((item) => {
          return (
            <ListItem button key={item.StoreType + item.StoreName}>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary={item.StoreType + " " + item.StoreName} />
            </ListItem>
          );
        })
      }
    </List>
  );
}
