import { Icon } from '@iconify/react';
import { useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@material-ui/core';
// components
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import {
  TaskListHead,
  TaskListToolbar,
  TaskDialog,
  TaskListBody
} from '../components/_dashboard/tasks';

import { getComparator, applySortFilter } from '../utils/taskMonitoring';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'time', label: 'Time', alignRight: false },
  { id: 'in_data', label: 'In Data', alignRight: false },
  { id: 'out_data', label: 'Out Data', alignRight: false },
  { id: 'action', label: 'Actions', alignRight: false }
];

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 'unset'
  },

  list: {
    padding: 0
  },
  list_item: {
    padding: 0
  }
}));

// ----------------------------------------------------------------------

export default function Task() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const classes = useStyles();

  const TASKS = useSelector((state) => state.task.tasks);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = TASKS.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleOpenDialog = () => {
    setIsOpenDialog(true);
  };

  const filteredUsers = applySortFilter(TASKS, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="Task Monitoring">
      <Container className={classes.container}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Tasks
          </Typography>
          <Button
            variant="contained"
            to="#"
            component={RouterLink}
            startIcon={<Icon icon={plusFill} />}
            onClick={handleOpenDialog}
          >
            New Task
          </Button>
        </Stack>

        <TaskDialog isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog} />

        <Card>
          <TaskListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TaskListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={TASKS.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TaskListBody
                  classes={classes}
                  tasks={TASKS}
                  filteredUsers={filteredUsers}
                  setSelected={setSelected}
                  page={page}
                  order={order}
                  orderBy={orderBy}
                  selected={selected}
                  filterName={filterName}
                  rowsPerPage={rowsPerPage}
                  handleClick={handleClick}
                />
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={TASKS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
