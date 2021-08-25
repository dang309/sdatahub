import { ButtonGroup, Button } from '@material-ui/core';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StopIcon from '@material-ui/icons/Stop';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GetAppIcon from '@material-ui/icons/GetApp';

import PropTypes from 'prop-types';
import { STRUCTURE_TASK } from '../../../utils/constants';

import {
  handlePlay,
  handleStop,
  handleDownload,
  handleDelete
} from '../../../utils/taskMonitoring';

TaskActions.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};

export default function TaskActions(props) {
  const { name, id } = props;
  const _actions = STRUCTURE_TASK.filter((item) => item.name === name)[0];

  return (
    <ButtonGroup
      size="small"
      color="secondary"
      variant="text"
      aria-label="large outlined primary button group"
    >
      {_actions.actions.indexOf('PLAY') > -1 && (
        <Button onClick={() => handlePlay(id)}>
          <PlayCircleOutlineIcon width={24} height={24} color="info" />
        </Button>
      )}
      {_actions.actions.indexOf('STOP') > -1 && (
        <Button onClick={() => handleStop(id)}>
          <StopIcon width={24} height={24} color="success" />
        </Button>
      )}
      {_actions.actions.indexOf('DOWNLOAD') > -1 && (
        <Button onClick={() => handleDownload(id)}>
          <GetAppIcon width={24} height={24} color="warning" />
        </Button>
      )}
      {_actions.actions.indexOf('DELETE') > -1 && (
        <Button onClick={() => handleDelete(id)}>
          <DeleteForeverIcon width={24} height={24} color="error" />
        </Button>
      )}
    </ButtonGroup>
  );
}
