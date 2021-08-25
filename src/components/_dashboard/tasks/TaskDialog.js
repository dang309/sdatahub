import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/styles';
import { FormControl, Input } from '@material-ui/core';
import { STRUCTURE_TASK } from '../../../utils/constants';

import { createOneTask } from '../../../utils/services';

TaskDialog.propTypes = {
  isOpenDialog: PropTypes.func,
  setIsOpenDialog: PropTypes.func
};

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }
}));

export default function TaskDialog(props) {
  const { isOpenDialog, setIsOpenDialog } = props;
  const [structureTask, setStructureTask] = useState(STRUCTURE_TASK);
  const [currentTask, setCurrentTask] = useState(0);

  const classes = useStyles();

  const handleClose = () => {
    setIsOpenDialog(false);
  };

  const handleChangeValue = (e, currentTask, index) => {
    const temp = [...structureTask];
    temp[currentTask].in_data[index].value = e.target.value;
    setStructureTask(temp);
  };

  const handleChangeTask = (e) => {
    setCurrentTask(e.target.value);
  };

  const renderFormGroup = (currentTask) => {
    const inData = structureTask[currentTask].in_data;
    return inData.map((item, index) => (
      <TextField
        key={index}
        label={item.display}
        id={item.display}
        name={item.display}
        type={item.type}
        value={item.value}
        onChange={(e) => handleChangeValue(e, currentTask, index)}
      />
    ));
  };

  const handleSubmitForm = () => {
    const temp = [...structureTask];
    let dataToSend = {};
    const tempData = temp[currentTask].in_data.map((item) => ({
      [item.name]: item.value
    }));
    tempData.forEach((item) => {
      dataToSend = Object.assign(dataToSend, item);
    });

    createOneTask(temp[currentTask].api, dataToSend)
      .then(() => {
        console.log('Create task successfuly!');
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={isOpenDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.root}
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Add task</DialogTitle>
        <DialogContent className={classes.content}>
          <TextField fullWidth select onChange={handleChangeTask} value={currentTask}>
            {STRUCTURE_TASK.map((item, index) => (
              <MenuItem key={index} value={index}>
                {item.display}
              </MenuItem>
            ))}
          </TextField>
          {renderFormGroup(currentTask)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitForm} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
