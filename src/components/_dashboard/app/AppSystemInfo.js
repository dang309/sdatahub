import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Card, CardHeader, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  root: {
    height: 432
  }
}));

// ----------------------------------------------------------------------

export default function AppSystemInfo() {
  const classes = useStyles();
  const systemInfo = useSelector((state) => state.system.systemInfo);
  return (
    <Card className={classes.root}>
      <CardHeader title="System Info" />
      <List className={classes.list}>
        {Object.keys(systemInfo).map((item) => {
          const [property, value] = systemInfo[item].split(':');
          return (
            <ListItem className={classes.list_item} key={Math.random()}>
              <Box display="flex" gap={1}>
                <Typography variant="subtitle2">{property}:</Typography>
                <Typography>{value}</Typography>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}
