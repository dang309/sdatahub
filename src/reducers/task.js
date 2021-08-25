import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  tasks: []
};

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    ADD_TASKS: (state, action) => {
      state.tasks = action.payload;
    }
  }
});

const { ADD_TASKS } = TaskSlice.actions;

export { ADD_TASKS };

export default TaskSlice.reducer;
