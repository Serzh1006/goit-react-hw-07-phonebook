import { createSlice } from '@reduxjs/toolkit';

const filterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filterByName(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
