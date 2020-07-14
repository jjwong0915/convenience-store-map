import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PlaceIcon from '@material-ui/icons/Place';

function StoreList(props) {
  return (
    <List
      dense
      style={{ maxHeight: '100%', overflow: 'auto' }}
      subheader={
        <ListSubheader>篩選結果（按照距離排列）</ListSubheader>
      }
    >
      {
        props.store.map((item, idx) => {
          return (
            <ListItem button key={item.StoreType + item.StoreName}>
              <ListItemText>
                <b>{(idx + 1).toString()}</b>
              </ListItemText>
              <ListItemText primary={item.StoreType + " " + item.StoreName} />
            </ListItem>
          );
        })
      }
    </List>
  );
}

export default StoreList;
