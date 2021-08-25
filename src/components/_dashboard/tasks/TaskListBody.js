// material
import {
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  List,
  ListItem,
  Box
} from '@material-ui/core';
// components

import PropTypes from 'prop-types';

import { sentenceCase } from 'change-case';
import moment from 'moment-timezone';
import { fStatus, fNameTask } from '../../../utils/taskMonitoring';
import Label from '../../Label';

import TaskListActions from './TaskListActions';

TaskListBody.propTypes = {
  classes: PropTypes.object,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  tasks: PropTypes.array,
  selected: PropTypes.array,
  filteredUsers: PropTypes.func,
  handleClick: PropTypes.func
};

export default function TaskListBody(props) {
  const { classes, tasks, filteredUsers, page, selected, rowsPerPage, handleClick } = props;

  const formatInData = (inData) => (
    <List className={classes.list}>
      {Object.keys(inData).map((item) => {
        const isShowData = Boolean(item === 'keyword' || item === 'recent_days');
        return (
          isShowData && (
            <ListItem className={classes.list_item} key={Math.random()}>
              <Box display="flex" gap={1}>
                <Typography variant="subtitle2">{sentenceCase(item.replace('_', ' '))}:</Typography>
                <Typography>{inData[item]}</Typography>
              </Box>
            </ListItem>
          )
        );
      })}
    </List>
  );

  const formatOutData = (outData) => (
    <List className={classes.list}>
      {Object.keys(outData).map((item) => (
        <ListItem className={classes.list_item} key={Math.random()}>
          <Box display="flex" gap={1}>
            <Typography variant="subtitle2">{sentenceCase(item.replace('_', ' '))}:</Typography>
            <Typography>{outData[item]}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );

  const formatTime = (start_at, end_at) => (
    <List className={classes.list}>
      <ListItem className={classes.list_item}>
        <Box display="flex" gap={1}>
          <Typography variant="subtitle2">Start at: </Typography>
          <Typography>
            {moment.tz(start_at, moment.tz.guess()).format('HH:mm - MMM D, YYYY Z')}
          </Typography>
        </Box>
      </ListItem>
      <ListItem className={classes.list_item}>
        <Box display="flex" gap={1}>
          <Typography variant="subtitle2">End at: </Typography>{' '}
          <Typography>
            {moment.tz(end_at, moment.tz.guess()).format('HH:mm - MMM D, YYYY Z')}
          </Typography>
        </Box>
      </ListItem>
    </List>
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tasks.length) : 0;

  return (
    <TableBody>
      {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        const { id, name, status, in_data, out_data, start_at, end_at } = row;
        const isItemSelected = selected.indexOf(id) !== -1;

        return (
          <TableRow
            hover
            key={id}
            tabIndex={-1}
            role="checkbox"
            selected={isItemSelected}
            aria-checked={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
            </TableCell>
            <TableCell>
              <Typography variant="body2">{fNameTask(name)}</Typography>
            </TableCell>
            <TableCell align="left">
              <Label variant="outlined" style={fStatus(status)}>
                {status}
              </Label>
            </TableCell>
            <TableCell align="left">{formatTime(start_at, end_at)}</TableCell>
            <TableCell align="left">{formatInData(in_data)}</TableCell>
            <TableCell align="left">{formatOutData(out_data)}</TableCell>

            <TableCell align="left">
              <TaskListActions name={name} id={id} />
            </TableCell>
          </TableRow>
        );
      })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}
