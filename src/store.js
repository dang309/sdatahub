import { configureStore } from '@reduxjs/toolkit';

import task from './reducers/task';
import system from './reducers/system';

export const store = configureStore({
  reducer: {
    task,
    system
  }
});
