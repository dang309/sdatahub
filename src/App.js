import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { socket, SocketContext } from './utils/socket';
import { EVENT_NAMES } from './utils/constants';

import { ADD_SYSTEM_INFO, ADD_SYSTEM_USAGE } from './reducers/system';
import { ADD_TASKS } from './reducers/task';

// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on(EVENT_NAMES.SYSTEM_SPEC, (systemInfo) => {
      dispatch(ADD_SYSTEM_INFO(systemInfo.data));
    });
  }, [dispatch]);

  useEffect(() => {
    socket.emit(EVENT_NAMES.TASKS_STATUS);
    socket.on(EVENT_NAMES.TASKS_STATUS, (tasks) => {
      dispatch(ADD_TASKS(tasks.data));
    });
  }, [dispatch]);

  useEffect(() => {
    socket.on(EVENT_NAMES.SYSTEM_USAGE, (systemUsageInfo) => {
      dispatch(ADD_SYSTEM_USAGE(systemUsageInfo.data));
    });
  }, [dispatch]);

  return (
    <SocketContext.Provider value={socket}>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </SocketContext.Provider>
  );
}
