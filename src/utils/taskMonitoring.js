import { filter } from 'lodash';
import { COLOR_STATUS, STRUCTURE_TASK } from './constants';
import { startOneTask, stopOneTask, downloadOneTask, deleteOneTask } from './services';

export function fStatus(status) {
  let statusLabelStyle = {};
  switch (status) {
    case 'WAITING':
      statusLabelStyle = {
        borderColor: COLOR_STATUS.WAITING,
        color: COLOR_STATUS.WAITING
      };
      break;
    case 'DONE':
      statusLabelStyle = {
        borderColor: COLOR_STATUS.DONE,
        color: COLOR_STATUS.DONE
      };
      break;
    case 'ERROR':
      statusLabelStyle = {
        borderColor: COLOR_STATUS.ERROR,
        color: COLOR_STATUS.ERROR
      };
      break;
    case 'CANCEL':
      statusLabelStyle = {
        borderColor: COLOR_STATUS.CANCEL,
        color: COLOR_STATUS.CANCEL
      };
      break;
    case 'MISSED':
      statusLabelStyle = {
        borderColor: COLOR_STATUS.MISSED,
        color: COLOR_STATUS.MISSED
      };
      break;
    case 'IDLE':
      statusLabelStyle = {
        borderColor: COLOR_STATUS.IDLE,
        color: COLOR_STATUS.IDLE
      };
      break;
    case 'PROCESS':
      return {
        borderColor: COLOR_STATUS.PROCESS,
        color: COLOR_STATUS.PROCESS
      };
    default:
      return statusLabelStyle;
  }

  return statusLabelStyle;
}

export function fNameTask(nameTask) {
  let temp = [...STRUCTURE_TASK];
  temp = temp.filter((item) => item.name === nameTask);
  return temp[0].display;
}

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export function createFileDownload(data, id) {
  return new Promise(() => {
    const aTag = document.createElement('a');
    aTag.href = `data:attachment/csv,${encodeURI(data)}`;
    aTag.download = `${id}.csv`;
    aTag.target = '_blank';
    aTag.click();
  });
}

export async function handlePlay(id) {
  try {
    const resData = await startOneTask(id);
    if (resData) {
      if (resData.result === 'ok') {
        console.log('Play ok');
      } else {
        console.log('Play fail');
      }
    }
  } catch (err) {
    console.log('Play fail');
  }
}
export async function handleStop(id) {
  try {
    const resData = await stopOneTask(id);
    if (resData) {
      if (resData.result === 'ok') {
        console.log('Stop ok');
      } else {
        console.log('Stop fail');
      }
    }
  } catch (err) {
    console.log('Stop fail');
  }
}
export async function handleDownload(id) {
  try {
    const resData = await downloadOneTask(id);
    if (resData) {
      await createFileDownload(resData, id);
    } else {
      console.log('Stop fail');
    }
  } catch (err) {
    console.log('Stop fail');
  }
}
export async function handleDelete(id) {
  try {
    const resData = await deleteOneTask(id);
    if (resData) {
      if (resData.result === 'ok') {
        console.log('Stop ok');
      } else {
        console.log('Stop fail');
      }
    }
  } catch (err) {
    console.log('Stop fail');
  }
}
