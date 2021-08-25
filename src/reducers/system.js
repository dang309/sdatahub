import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  systemInfo: {},
  systemUsage: []
};

export const SystemSlice = createSlice({
  name: 'config',
  initialState: INITIAL_STATE,
  reducers: {
    ADD_SYSTEM_INFO: (state, action) => {
      state.systemInfo = Object.assign(state.systemInfo, action.payload);
    },
    ADD_SYSTEM_USAGE: (state, action) => {
      state.systemUsage.push(action.payload);
    }
  }
});

const { ADD_SYSTEM_INFO, ADD_SYSTEM_USAGE } = SystemSlice.actions;

export { ADD_SYSTEM_INFO, ADD_SYSTEM_USAGE };

export default SystemSlice.reducer;
